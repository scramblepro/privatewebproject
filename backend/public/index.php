<?php
require '../src/db.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if ($uri === '/projects') {
    $stmt = $pdo->query('SELECT * FROM projects');
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    exit;
}

if ($uri === '/skills') {
    $stmt = $pdo->query('SELECT id, name, level, sort_order FROM skills ORDER BY sort_order ASC, name ASC');
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    exit;
}

if ($uri === '/messages' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (!is_array($data)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid JSON body']);
        exit;
    }

    $stmt = $pdo->prepare('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)');
    $stmt->execute([
        $data['name'] ?? '',
        $data['email'] ?? '',
        $data['message'] ?? '',
    ]);

    echo json_encode(['status' => 'ok']);
    exit;
}

http_response_code(404);
echo json_encode(['error' => 'Not found']);
