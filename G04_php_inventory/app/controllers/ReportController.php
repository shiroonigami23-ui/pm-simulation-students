<?php
require_once __DIR__ . '/../models/Product.php';
class ReportController {
    public function valuation(): void {
        $report = Product::valuationReport();
        $total  = array_sum(array_column($report, 'total_value'));
        require __DIR__ . '/../views/reports/valuation.php';
    }
}
