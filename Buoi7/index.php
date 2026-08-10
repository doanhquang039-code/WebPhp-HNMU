<?php
$files = scandir(__DIR__);
$files = array_diff($files, array('.', '..', 'index.php'));
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bài tập - <?php echo basename(__DIR__); ?></title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0f172a; color: #e2e8f0; padding: 30px; max-width: 800px; margin: 0 auto; }
        h1 { color: #818cf8; border-bottom: 2px solid #334155; padding-bottom: 10px; }
        .file-list { list-style: none; padding: 0; }
        .file-list li { margin: 15px 0; padding: 15px; background: #1e293b; border-radius: 8px; border: 1px solid #334155; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
        .file-list a { color: #38bdf8; text-decoration: none; font-size: 1.1em; font-weight: 500; display: flex; align-items: center; gap: 10px; }
        .file-list a:hover { text-decoration: underline; color: #7dd3fc; }
        img.preview { max-width: 100%; height: auto; display: block; margin-top: 15px; border-radius: 6px; border: 1px solid #475569; }
        .back-btn { display: inline-flex; align-items: center; margin-bottom: 20px; padding: 8px 16px; background-color: #4f46e5; color: white; text-decoration: none; border-radius: 6px; font-weight: bold; transition: background 0.3s; }
        .back-btn:hover { background-color: #4338ca; }
    </style>
</head>
<body>
    <a href="../about.php" class="back-btn">⬅ Quay lại Trang chủ</a>
    <h1>📂 Thư mục: <?php echo basename(__DIR__); ?></h1>
    
    <?php if (empty($files)): ?>
        <p>Thư mục này hiện chưa có bài tập hoặc file nào.</p>
    <?php else: ?>
        <ul class="file-list">
            <?php foreach ($files as $file): ?>
                <li>
                    <a href="<?php echo htmlspecialchars($file); ?>">
                        📄 <?php echo htmlspecialchars($file); ?>
                    </a>
                    <?php 
                        $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
                        if (in_array($ext, ['jpg', 'jpeg', 'png', 'gif', 'webp'])):
                    ?>
                        <img src="<?php echo htmlspecialchars($file); ?>" alt="<?php echo htmlspecialchars($file); ?>" class="preview">
                    <?php endif; ?>
                </li>
            <?php endforeach; ?>
        </ul>
    <?php endif; ?>
</body>
</html>
