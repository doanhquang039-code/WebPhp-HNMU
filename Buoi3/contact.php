<?php

$cloudinary_cloud_name = 'dn4uflhrm';
$cloudinary_api_key = '948366151229746';
$cloudinary_api_secret = 'vwoeMmIcDxS_SZptgOieEz1MOuQ';

$errors = [];
$success = "";
$fullname = $email = $subject = $content = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = trim($_POST['fullname'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $subject = trim($_POST['subject'] ?? '');
    $content = trim($_POST['content'] ?? '');

    if (empty($fullname)) {
        $errors['fullname'] = "Họ tên không được để trống.";
    }

    if (empty($content)) {
        $errors['content'] = "Nội dung không được để trống.";
    } elseif (mb_strlen($content, 'UTF-8') < 10 || mb_strlen($content, 'UTF-8') > 500) {
        $errors['content'] = "Nội dung phải từ 10 đến 500 ký tự.";
    }

    if (empty($email)) {
        $errors['email'] = "Email không được để trống.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = "Email không đúng định dạng.";
    }

    $imageUrl = "";
  
    if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
        $fileTmpPath = $_FILES['image']['tmp_name'];
        $fileName = $_FILES['image']['name'];
        $fileSize = $_FILES['image']['size'];
        $fileType = $_FILES['image']['type'];
        
        $allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        if (!in_array($fileType, $allowedTypes)) {
            $errors['image'] = "Chỉ chấp nhận file ảnh (JPG, PNG, GIF, WEBP).";
        } elseif ($fileSize > 20 * 1024 * 1024) { 
            $errors['image'] = "Kích thước ảnh không được vượt quá 20MB.";
        }
    }

    if (empty($errors)) {
        if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
            if ($cloudinary_cloud_name == 'YOUR_CLOUD_NAME') {
                $errors['image'] = "Bạn chưa cấu hình thông tin API Cloudinary trong code PHP.";
            } else {
                $timestamp = time();
                $signature = sha1("timestamp=" . $timestamp . $cloudinary_api_secret);
                
                $ch = curl_init();
                curl_setopt($ch, CURLOPT_URL, "https://api.cloudinary.com/v1_1/" . $cloudinary_cloud_name . "/image/upload");
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                curl_setopt($ch, CURLOPT_POST, 1);
                
                $cfile = new CURLFile($fileTmpPath, $fileType, $fileName);
                $postParams = array(
                    'file' => $cfile,
                    'api_key' => $cloudinary_api_key,
                    'timestamp' => $timestamp,
                    'signature' => $signature
                );
                
                curl_setopt($ch, CURLOPT_POSTFIELDS, $postParams);
                $result = curl_exec($ch);
                curl_close($ch);
                
                $response = json_decode($result, true);
                if (isset($response['secure_url'])) {
                    $imageUrl = $response['secure_url'];
                } else {
                    $errors['image'] = "Lỗi upload ảnh lên Cloudinary: " . ($response['error']['message'] ?? 'Unknown error');
                }
            }
        }
        
        if (empty($errors)) {
         
            $success = "Gửi liên hệ thành công!";
            if ($imageUrl) {
                $success .= "<br>Ảnh đính kèm đã được lưu: <a href='{$imageUrl}' target='_blank' style='color:#fff; text-decoration:underline;'>Xem ảnh</a>";
            }
        }
    }
}
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thực hành trên lớp: Form liên hệ</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #3b82f6;
            --primary-hover: #2563eb;
            --danger: #ef4444;
            --success: #10b981;
            --bg-color: #f1f5f9;
            --card-bg: #ffffff;
            --text-main: #1e293b;
            --text-muted: #64748b;
            --border-color: #cbd5e1;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-main);
            line-height: 1.6;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }

        .container {
            background: var(--card-bg);
            border-radius: 1rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
            overflow: hidden;
            max-width: 600px;
            width: 100%;
        }

        .form-section {
            padding: 3rem;
            background: var(--card-bg);
            width: 100%;
        }

        .form-section h1 {
            font-size: 2rem;
            font-weight: 700;
            color: var(--text-main);
            text-align: center;
            margin-bottom: 0.5rem;
        }

        .subtitle {
            text-align: center;
            color: var(--text-muted);
            margin-bottom: 2.5rem;
            font-size: 0.95rem;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        label {
            display: block;
            font-weight: 500;
            margin-bottom: 0.5rem;
            color: var(--text-main);
            font-size: 0.95rem;
        }

        input[type="text"],
        input[type="email"],
        select,
        textarea {
            width: 100%;
            padding: 0.75rem 1rem;
            border: 1px solid var(--border-color);
            border-radius: 0.5rem;
            font-family: inherit;
            font-size: 1rem;
            transition: all 0.3s ease;
            background: #f8fafc;
        }

        input:focus,
        select:focus,
        textarea:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
            background: white;
        }

        textarea {
            resize: vertical;
            min-height: 120px;
        }

        .file-input-wrapper {
            position: relative;
        }

        input[type="file"] {
            border: 1px dashed var(--border-color);
            background: #f8fafc;
            padding: 1rem;
            width: 100%;
            border-radius: 0.5rem;
            cursor: pointer;
            font-size: 0.9rem;
        }

        input[type="file"]:hover {
            background: #f1f5f9;
        }

        .btn-submit {
            width: 100%;
            padding: 0.875rem;
            background-color: var(--primary);
            color: white;
            border: none;
            border-radius: 0.5rem;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s ease;
            margin-top: 1rem;
        }

        .btn-submit:hover {
            background-color: var(--primary-hover);
        }

        .error-message {
            color: var(--danger);
            font-size: 0.85rem;
            margin-top: 0.375rem;
            display: block;
        }

        input.is-invalid, textarea.is-invalid {
            border-color: var(--danger);
            background-color: #fef2f2;
        }

        .alert-success {
            background-color: var(--success);
            color: white;
            padding: 1rem;
            border-radius: 0.5rem;
            margin-bottom: 2rem;
            text-align: center;
            font-weight: 500;
            box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.2);
        }

        .help-text {
            font-size: 0.8rem;
            color: var(--text-muted);
            margin-top: 0.25rem;
        }

        @media (max-width: 768px) {
            .form-section {
                padding: 2rem;
            }
        }
    </style>
</head>
<body>

    <div class="container">
        <!-- Contact Form -->
        <div class="form-section">
            <h1>Liên hệ</h1>
            <p class="subtitle">Vui lòng nhập đầy đủ thông tin bên dưới.</p>

            <?php if (!empty($success)): ?>
                <div class="alert-success">
                    <?php echo $success; ?>
                </div>
            <?php endif; ?>

            <form action="" method="POST" enctype="multipart/form-data">
                
                <div class="form-group">
                    <label for="fullname">Họ tên <span style="color:var(--danger)">*</span></label>
                    <input type="text" id="fullname" name="fullname" 
                           value="<?php echo htmlspecialchars($fullname); ?>" 
                           class="<?php echo isset($errors['fullname']) ? 'is-invalid' : ''; ?>"
                           placeholder="Nhập họ tên của bạn">
                    <?php if (isset($errors['fullname'])): ?>
                        <span class="error-message"><?php echo $errors['fullname']; ?></span>
                    <?php endif; ?>
                </div>

                <div class="form-group">
                    <label for="email">Email <span style="color:var(--danger)">*</span></label>
                    <input type="email" id="email" name="email" 
                           value="<?php echo htmlspecialchars($email); ?>" 
                           class="<?php echo isset($errors['email']) ? 'is-invalid' : ''; ?>"
                           placeholder="ví dụ: email@domain.com">
                    <?php if (isset($errors['email'])): ?>
                        <span class="error-message"><?php echo $errors['email']; ?></span>
                    <?php endif; ?>
                </div>

                <div class="form-group">
                    <label for="subject">Chủ đề</label>
                    <select id="subject" name="subject">
                        <option value="Hỗ trợ kỹ thuật" <?php echo $subject == 'Hỗ trợ kỹ thuật' ? 'selected' : ''; ?>>Hỗ trợ kỹ thuật</option>
                        <option value="Tư vấn dịch vụ" <?php echo $subject == 'Tư vấn dịch vụ' ? 'selected' : ''; ?>>Tư vấn dịch vụ</option>
                        <option value="Phản hồi / Góp ý" <?php echo $subject == 'Phản hồi / Góp ý' ? 'selected' : ''; ?>>Phản hồi / Góp ý</option>
                        <option value="Khác" <?php echo $subject == 'Khác' ? 'selected' : ''; ?>>Khác</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="image">Ảnh đính kèm (Cloudinary)</label>
                    <div class="file-input-wrapper">
                        <input type="file" id="image" name="image" accept="image/png, image/jpeg, image/gif, image/webp">
                    </div>
                    <div class="help-text">Chỉ chấp nhận ảnh (JPG, PNG, GIF). Tối đa 20MB.</div>
                    <?php if (isset($errors['image'])): ?>
                        <span class="error-message"><?php echo $errors['image']; ?></span>
                    <?php endif; ?>
                </div>

                <div class="form-group">
                    <label for="content">Nội dung <span style="color:var(--danger)">*</span></label>
                    <textarea id="content" name="content" 
                              class="<?php echo isset($errors['content']) ? 'is-invalid' : ''; ?>"
                              placeholder="Nhập nội dung liên hệ..."><?php echo htmlspecialchars($content); ?></textarea>
                    <div class="help-text">Nội dung phải từ 10 đến 500 ký tự.</div>
                    <?php if (isset($errors['content'])): ?>
                        <span class="error-message"><?php echo $errors['content']; ?></span>
                    <?php endif; ?>
                </div>

                <button type="submit" class="btn-submit">Gửi liên hệ</button>

            </form>
        </div>
    </div>

</body>
</html>
