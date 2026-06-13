<?php

$host = getenv('DB_HOST') ?: 'postgres';
$port = getenv('DB_PORT') ?: '5432';
$dbname = getenv('DB_NAME') ?: 'portfolio_db';
$username = getenv('DB_USER') ?: 'postgres';
$password = getenv('DB_PASSWORD');

if ($password === false || $password === '') {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Database configuration is missing']);
    exit;
}

$dsn = "pgsql:host={$host};port={$port};dbname={$dbname}";

try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Database connection failed']);
    exit;
}
