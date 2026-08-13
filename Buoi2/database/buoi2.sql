-- CHAY TREN INFINITYFREE: Bo qua phan tao database (da tao tren cPanel)
-- CHAY LOCAL: Mo comment 2 dong CREATE DATABASE va USE ben duoi
-- CREATE DATABASE IF NOT EXISTS buoi2_sukien CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- USE buoi2_sukien;

SET NAMES utf8mb4;

-- Bảng danh mục loại sự kiện
CREATE TABLE IF NOT EXISTS danh_muc (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ten_loai VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Bảng sự kiện chính
CREATE TABLE IF NOT EXISTS su_kien (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ten VARCHAR(200) NOT NULL,
    ngay_dien_ra DATE NOT NULL,
    suc_chua INT NOT NULL DEFAULT 1,
    quy_mo VARCHAR(20) NOT NULL,
    loai_id INT NOT NULL,
    ghi_chu TEXT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_loai FOREIGN KEY (loai_id) REFERENCES danh_muc(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dữ liệu mẫu cho danh mục
INSERT INTO danh_muc (ten_loai) VALUES
('Hội thảo / Workshop'),
('Cuộc thi / Hackathon'),
('Văn nghệ / Giao lưu'),
('Thể thao');

-- Dữ liệu mẫu sự kiện
INSERT INTO su_kien (ten, ngay_dien_ra, suc_chua, quy_mo, loai_id, ghi_chu) VALUES
('Workshop PHP Cơ bản', '2026-09-01', 40, 'Nhỏ', 1, 'Dành cho sinh viên năm nhất'),
('Hackathon mùa hè 2026', '2026-09-10', 120, 'Lớn', 2, 'Thi lập trình 24 giờ'),
('Giao lưu văn nghệ cuối kỳ', '2026-09-20', 60, 'Vừa', 3, NULL);
