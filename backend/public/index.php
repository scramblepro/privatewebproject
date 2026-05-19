<?php
require '../src/db.php';

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$uri = $_SERVER['REQUEST_URI'];

if ($uri === '/projects') {
    $stmt = $pdo->query("SELECT * FROM projects");
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
}

if ($uri === '/skills') {
    $stmt = $pdo->query("SELECT id, name, level, sort_order FROM skills ORDER BY sort_order ASC, name ASC");
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
}

if ($uri === '/messages' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    $stmt = $pdo->prepare("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)");
    $stmt->execute([$data['name'], $data['email'], $data['message']]);

    echo json_encode(["status" => "ok"]);
}