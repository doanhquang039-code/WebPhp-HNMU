# Bài Tập Thực Hành Buổi 2: Xây Dựng Ứng Dụng Quản Lý Sự Kiện (PHP MVC)

Dự án này là bài tập thực hành xây dựng một ứng dụng quản lý sự kiện sử dụng mô hình **MVC (Model-View-Controller)** kết hợp với **Repository Pattern** bằng PHP thuần và MySQL. Dự án đã được hoàn thiện và triển khai (deploy) thành công lên hosting InfinityFree.

## 🚀 Các tính năng và Kỹ thuật nổi bật
- **Kiến trúc Clean Code**: Tách biệt hoàn toàn phần xử lý giao diện (View), logic điều hướng (Controller), cấu trúc dữ liệu (Model) và truy vấn CSDL (Repository). Chuyển hóa tư tưởng "code ra code, class ra class".
- **Quản lý sự kiện (CRUD Đầy đủ)**:
  - Hiển thị danh sách sự kiện kèm phân loại.
  - Thêm sự kiện mới (tự động phân loại quy mô dựa trên sức chứa).
  - Cập nhật và chỉnh sửa thông tin sự kiện.
  - Xóa sự kiện.
- **Kiểm tra trùng lặp thông minh (Validation)**: Hệ thống tự động chặn nếu người dùng cố tình tạo một sự kiện bị **trùng tên và trùng luôn cả ngày diễn ra** so với một sự kiện đã có.
- **Bảo mật và Tối ưu**: Sử dụng `PDO` chuẩn với tham số hóa (Prepared Statements) để chống 100% tấn công SQL Injection. Kết nối DB áp dụng Singleton Pattern để tiết kiệm tài nguyên.

## 📂 Cấu trúc dự án
- `/config`: Cấu hình kết nối Database (sử dụng Singleton).
- `/controllers`: Chứa `SuKienController.php` đóng vai trò là điều phối viên (Front Controller).
- `/database`: File `buoi2.sql` chứa cấu trúc bảng và dữ liệu mẫu để khởi tạo CSDL.
- `/models`: Chứa các thực thể dữ liệu dạng object (`SuKien`, `DanhMuc`) mang theo logic nghiệp vụ cốt lõi.
- `/repositories`: Các class (`SuKienRepository`, `DanhMucRepository`) đảm nhận toàn bộ việc viết câu lệnh SQL (SELECT, INSERT, UPDATE, DELETE).
- `/views`: Các giao diện HTML được chia nhỏ (`layout_header`, `layout_footer`) để tái sử dụng.
- `index.php`: File gốc (Entry point) khởi chạy toàn bộ ứng dụng.

## 🗄️ Cơ sở dữ liệu (MySQL)
Gồm 2 bảng có ràng buộc khóa ngoại (Foreign Key):
1. **`danh_muc`**: Danh mục các loại sự kiện (Hội thảo, Hackathon, Văn nghệ...).
2. **`su_kien`**: Bảng dữ liệu chính chứa thông tin sự kiện (Tên, ngày, loại, sức chứa...).

## 🌐 Triển khai (Deployment)
Dự án được thiết kế để dễ dàng chuyển đổi qua lại giữa môi trường Local (MySQL Workbench/XAMPP) và Production (InfinityFree). Bạn chỉ cần thay đổi thông tin host, user, password trong file `config/Database.php` và import file SQL lên phpMyAdmin là web có thể chạy trên mạng.
