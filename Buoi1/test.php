<?php

$diem = 7.5; // Thay đổi giá trị điểm tại đây

if ($diem >= 8) {
    echo "Loại: Giỏi";
} elseif ($diem >= 6.5) {
    echo "Loại: Khá";
} elseif ($diem >= 5) {
    echo "Loại: Trung Bình";
} else {
    echo "Loại: Yếu";
}

?>