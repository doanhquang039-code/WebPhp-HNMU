<?php
session_start();

// Khởi tạo mảng lưu danh sách sự kiện
if (!isset($_SESSION['danh_sach_su_kien'])) {
    $_SESSION['danh_sach_su_kien'] = [];
}

// 1. Hàm tự định nghĩa để xử lý nghiệp vụ
// Yêu cầu: Đánh giá quy mô sự kiện dựa trên sức chứa
function xacDinhQuyMo($suc_chua) {
    if ($suc_chua >= 100) {
        return "Lớn";
    } elseif ($suc_chua >= 50) {
        return "Vừa";
    } else {
        return "Nhỏ";
    }
}

// Tiếp nhận và xử lý dữ liệu khi người dùng submit form
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ten = $_POST['ten_su_kien'];
    $ngay = $_POST['ngay_dien_ra'];
    $suc_chua = $_POST['suc_chua'];

    // 2. Sử dụng điều kiện để kiểm tra dữ liệu
    if ($ten != "" && $ngay != "" && $suc_chua > 0) {
        
        // Kiểm tra sự kiện đã tồn tại (trùng tên và trùng ngày)
        $bi_trung = false;
        foreach ($_SESSION['danh_sach_su_kien'] as $sk) {
            if (strtolower($sk['ten']) == strtolower($ten) && $sk['ngay'] == $ngay) {
                $bi_trung = true;
                break;
            }
        }

        if ($bi_trung) {
            $thong_bao = "Lỗi: Sự kiện này đã được lên lịch vào ngày $ngay rồi!";
        } else {
            // 3. Tổ chức dữ liệu bằng mảng
            $su_kien_moi = [
                'ten' => $ten,
                'ngay' => $ngay,
                'suc_chua' => $suc_chua,
                'quy_mo' => xacDinhQuyMo($suc_chua) // Gọi hàm
            ];
            
            // Thêm sự kiện mới vào mảng chính
            $_SESSION['danh_sach_su_kien'][] = $su_kien_moi;
            $thong_bao = "Thêm sự kiện thành công!";
        }
        
    } else {
        $thong_bao = "Vui lòng nhập đầy đủ thông tin hợp lệ!";
    }
}
?>

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Bài tập Buổi 2</title>
</head>
<body>
    <a href="https://quangdoanh17b5.infinityfree.me/about.php" style="display: inline-block; margin-bottom: 10px; color: #007bff; text-decoration: none;">&larr; Quay lại hệ thống chính</a>
    <h2>Form Nhập Thông Tin Sự Kiện</h2>
    
    <!-- Hiện thông báo nếu có -->
    <?php if (isset($thong_bao)) {
        echo "<p style='color: blue;'><b>" . $thong_bao . "</b></p>";
    } ?>

    <!-- Form nhập liệu -->
    <form method="POST" action="">
        <p>
            Tên sự kiện:<br>
            <input type="text" name="ten_su_kien">
        </p>
        <p>
            Ngày diễn ra:<br>
            <input type="date" name="ngay_dien_ra">
        </p>
        <p>
            Sức chứa (số người):<br>
            <input type="number" name="suc_chua">
        </p>
        <button type="submit">Lưu dữ liệu</button>
    </form>

    <hr>

    <h2>Danh Sách Sự Kiện Đã Nhập</h2>
    <!-- Hiển thị dưới dạng bảng -->
    <table border="1" cellpadding="10" cellspacing="0" width="600">
        <tr style="background-color: #f2f2f2;">
            <th>STT</th>
            <th>Tên sự kiện</th>
            <th>Ngày diễn ra</th>
            <th>Sức chứa</th>
            <th>Quy mô</th>
        </tr>
        
        <?php 
        // 4. Sử dụng vòng lặp để hiển thị dữ liệu
        $stt = 1;
        foreach ($_SESSION['danh_sach_su_kien'] as $sk) { 
        ?>
            <tr>
                <td><?php echo $stt++; ?></td>
                <td><?php echo $sk['ten']; ?></td>
                <td><?php echo $sk['ngay']; ?></td>
                <td><?php echo $sk['suc_chua']; ?></td>
                <td><?php echo $sk['quy_mo']; ?></td>
            </tr>
        <?php } ?>
        
    </table>
</body>
</html>
