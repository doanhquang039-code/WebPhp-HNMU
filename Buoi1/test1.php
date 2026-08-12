<?php
$tongTien = null;
$soLuong = "";
$donGia = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $soLuong = $_POST["so_luong"];
    $donGia  = $_POST["don_gia"];

    if (is_numeric($soLuong) && is_numeric($donGia) && $soLuong > 0 && $donGia > 0) {
        $tongTien = $soLuong * $donGia;
    } else {
        $tongTien = "Vui lòng nhập số hợp lệ!";
    }
}
?>

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Tính Tổng Tiền</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f2f5;
            margin: 0;
        }

        .card {
            background: white;
            padding: 30px 40px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            width: 350px;
        }

        h2 {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #555;
        }

        input[type="number"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 15px;
            box-sizing: border-box;
        }

        input[type="number"]:focus {
            border-color: #ff6c37;
            outline: none;
        }

        button {
            width: 100%;
            padding: 12px;
            background-color: #ff6c37;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            font-weight: bold;
        }

        button:hover {
            background-color: #e55a28;
        }

        .result {
            margin-top: 20px;
            padding: 15px;
            background-color: #fff3ee;
            border-left: 4px solid #ff6c37;
            border-radius: 8px;
            font-size: 16px;
            color: #333;
            text-align: center;
        }

        .result span {
            font-weight: bold;
            color: #ff6c37;
            font-size: 20px;
        }
    </style>
</head>
<body>

<div class="card">
    <h2>🧾 Tính Tổng Tiền</h2>

    <form method="POST" action="">

        <label for="so_luong">Số Lượng:</label>
        <input type="number" id="so_luong" name="so_luong"
               placeholder="Nhập số lượng..."
               value="<?php echo htmlspecialchars($soLuong); ?>"
               min="1" required>

        <label for="don_gia">Đơn Giá (VNĐ):</label>
        <input type="number" id="don_gia" name="don_gia"
               placeholder="Nhập đơn giá..."
               value="<?php echo htmlspecialchars($donGia); ?>"
               min="1" required>

        <button type="submit"> Tính Tổng Tiền</button>

    </form>

    <?php if ($tongTien !== null): ?>
        <div class="result">
            <?php if (is_numeric($tongTien)): ?>
                Tổng tiền: <span><?php echo number_format($tongTien, 0, ',', '.'); ?> VNĐ</span>
            <?php else: ?>
                ⚠️ <?php echo $tongTien; ?>
            <?php endif; ?>
        </div>
    <?php endif; ?>
</div>

</body>
</html>