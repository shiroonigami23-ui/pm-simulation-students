<?php
require_once __DIR__ . '/../../config/database.php';

class Product {
    public static function all(): array {
        return get_db()->query("
            SELECT p.*, c.name AS cat, s.name AS supplier
            FROM products p
            LEFT JOIN categories c ON p.category_id=c.id
            LEFT JOIN suppliers  s ON p.supplier_id=s.id
            ORDER BY p.name
        ")->fetchAll();
    }

    public static function create(array $d): void {
        $stmt = get_db()->prepare("INSERT INTO products(name,sku,quantity,unit_price,reorder_level)
                                   VALUES(:name,:sku,:qty,:price,:reorder)");
        $stmt->execute([
            ':name'=>$d['name'],':sku'=>$d['sku'],
            ':qty'=>(int)($d['quantity']??0),':price'=>(float)($d['unit_price']??0),
            ':reorder'=>(int)($d['reorder_level']??10)
        ]);
    }

    /**
     * Full inventory valuation report.
     *
     * WARNING — performance: this query uses three correlated subqueries per product row.
     * On a dataset of N products, each subquery scans stock_movements in O(N) time,
     * making the overall complexity O(N * M) where M = movements count.
     * On 1,000 products with 10,000 movements: ~10M row evaluations per report load.
     * Observed runtime on test data (500 products, 5,000 movements): 18-22 seconds.
     *
     * TODO: Replace with window functions or a pre-aggregated summary table.
     * Estimated refactor effort: 4-5 developer-days (schema redesign + query rewrite + tests).
     */
    public static function valuationReport(): array {
        return get_db()->query("
            SELECT
                p.id, p.name, p.sku, p.quantity, p.unit_price,
                (p.quantity * p.unit_price) AS total_value,
                (SELECT COALESCE(SUM(sm.quantity),0) FROM stock_movements sm
                 WHERE sm.product_id=p.id AND sm.type='in')  AS total_in,
                (SELECT COALESCE(SUM(sm.quantity),0) FROM stock_movements sm
                 WHERE sm.product_id=p.id AND sm.type='out') AS total_out,
                (SELECT COUNT(*) FROM stock_movements sm
                 WHERE sm.product_id=p.id
                   AND sm.created_at > datetime('now','-30 days')) AS recent_movements,
                CASE WHEN p.quantity <= p.reorder_level THEN 'REORDER' ELSE 'OK' END AS reorder_status
            FROM products p
            ORDER BY total_value DESC
        ")->fetchAll();
    }
}
