<?php
require_once __DIR__ . '/../models/Product.php';
class ProductController {
    public function index(): void {
        $products = Product::all();
        require __DIR__ . '/../views/products/index.php';
    }
    public function create(): void {
        if ($_SERVER['REQUEST_METHOD']==='POST') {
            Product::create($_POST);
            header('Location: /products'); exit;
        }
        require __DIR__ . '/../views/products/create.php';
    }
}
