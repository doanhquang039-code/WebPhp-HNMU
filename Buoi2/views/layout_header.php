<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title><?php echo $title ?? 'Quản lý Sự kiện'; ?></title>
    <style>
        body { font-family: Arial, sans-serif; background: #f0f2f5; margin: 0; }
        .navbar { background: #2c3e50; color: white; padding: 12px 20px; display: flex; align-items: center; gap: 20px; }
        .navbar a { color: #ecf0f1; text-decoration: none; font-weight: bold; }
        .navbar a:hover { color: #3498db; }
        .container { max-width: 900px; margin: 30px auto; padding: 0 15px; }
        .card { background: white; border-radius: 8px; padding: 25px; box-shadow: 0 2px 4px rgba(0,0,0,.1); }
        h2 { margin-top: 0; color: #2c3e50; }
        label { display: block; margin: 12px 0 5px; font-weight: bold; color: #555; }
        input, select, textarea { width: 100%; padding: 9px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
        .btn { display: inline-block; padding: 9px 18px; border-radius: 4px; border: none; cursor: pointer; text-decoration: none; font-size: 14px; font-weight: bold; }
        .btn-primary { background: #3498db; color: white; }
        .btn-success { background: #27ae60; color: white; }
        .btn-warning { background: #f39c12; color: white; }
        .btn-danger { background: #e74c3c; color: white; }
        .btn:hover { opacity: .85; }
        .alert { padding: 12px 18px; border-radius: 4px; margin-bottom: 18px; font-weight: bold; }
        .alert-success { background: #d4edda; color: #155724; }
        .alert-danger { background: #f8d7da; color: #721c24; }
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: 12px; border-bottom: 1px solid #e0e0e0; text-align: left; }
        th { background: #f8f9fa; color: #2c3e50; }
        tr:hover { background: #f5f5f5; }
        .badge { display: inline-block; padding: 3px 10px; border-radius: 12px; font-size: 12px; color: white; }
        .badge-sm { background: #95a5a6; }
        .badge-vua { background: #e67e22; }
        .badge-lon { background: #e74c3c; }
    </style>
</head>
<body>
    <div class="navbar">
        <strong>📅 Quản lý Sự kiện CLB</strong>
        <a href="index.php">Danh sách</a>
        <a href="index.php?action=create">+ Thêm mới</a>
    </div>
    <div class="container">
        <div class="card">
