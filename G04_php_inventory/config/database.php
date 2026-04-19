<?php
define('DB_PATH', __DIR__ . '/../data/inventory.db');

function get_db(): PDO {
    static $pdo = null;
    if ($pdo === null) {
        @mkdir(dirname(DB_PATH), 0777, true);
        $pdo = new PDO('sqlite:' . DB_PATH);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        _init_schema($pdo);
    }
    return $pdo;
}

function _init_schema(PDO $db): void {
    $db->exec("CREATE TABLE IF NOT EXISTS categories(
        id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE, description TEXT)");
    $db->exec("CREATE TABLE IF NOT EXISTS suppliers(
        id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, phone TEXT, address TEXT)");
    $db->exec("CREATE TABLE IF NOT EXISTS products(
        id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, sku TEXT UNIQUE,
        category_id INTEGER, supplier_id INTEGER, quantity INTEGER DEFAULT 0,
        unit_price REAL DEFAULT 0.0, reorder_level INTEGER DEFAULT 10,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(category_id) REFERENCES categories(id),
        FOREIGN KEY(supplier_id) REFERENCES suppliers(id))");
    $db->exec("CREATE TABLE IF NOT EXISTS stock_movements(
        id INTEGER PRIMARY KEY AUTOINCREMENT, product_id INTEGER, type TEXT,
        quantity INTEGER, notes TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(product_id) REFERENCES products(id))");
}
