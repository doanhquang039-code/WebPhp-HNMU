<?php
require_once __DIR__ . '/../config/Database.php';
require_once __DIR__ . '/../models/DanhMuc.php';

/**
 * DanhMucRepository - Toàn bộ SQL liên quan đến bảng danh_muc
 */
class DanhMucRepository {
    private PDO $db;

    public function __construct() {
        $this->db = Database::getInstance()->getConn();
    }

    /**
     * Lấy tất cả danh mục, trả về mảng object DanhMuc[]
     */
    public function getAll(): array {
        $rows = $this->db->query("SELECT * FROM danh_muc ORDER BY ten_loai")
                         ->fetchAll(PDO::FETCH_ASSOC);

        return array_map(fn($row) => new DanhMuc($row), $rows);
    }
}
