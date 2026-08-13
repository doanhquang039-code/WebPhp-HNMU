<?php
// Front Controller - Điểm vào duy nhất của ứng dụng
require_once __DIR__ . '/controllers/SuKienController.php';

$controller = new SuKienController();
$action = $_GET['action'] ?? 'index';

// Điều hướng theo action
switch ($action) {
    case 'create': $controller->create(); break;
    case 'store':  $controller->store();  break;
    case 'edit':   $controller->edit();   break;
    case 'update': $controller->update(); break;
    case 'delete': $controller->delete(); break;
    default:       $controller->index();  break;
}
