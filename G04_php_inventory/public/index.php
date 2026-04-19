<?php
require_once __DIR__ . '/../config/database.php';

$uri = rtrim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/') ?: '/';

$routes = [
    '/'            => ['ProductController', 'index'],
    '/products'    => ['ProductController', 'index'],
    '/products/new'=> ['ProductController', 'create'],
    '/reports'     => ['ReportController',  'valuation'],
];

if (isset($routes[$uri])) {
    [$ctrl, $method] = $routes[$uri];
    require_once __DIR__ . "/../app/controllers/{$ctrl}.php";
    (new $ctrl())->{$method}();
} else {
    http_response_code(404);
    echo '<h1 style="font-family:sans-serif;padding:2rem">404 — Not Found</h1>';
}
