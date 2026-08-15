<?php
require_once __DIR__ . '/../config/Database.php';
require_once __DIR__ . '/../models/SuKien.php';

class SuKienRepository {
    private PDO $db;

    public function __construct() {
        $this->db = Database::getInstance()->getConn();
    }

    /**
     * Lấy tất cả sự kiện kèm tên loại (JOIN)
     * @return SuKien[]
     */
    public function getAll(): array {
        $sql = "SELECT sk.*, dm.ten_loai
                FROM   su_kien sk
                LEFT JOIN danh_muc dm ON sk.loai_id = dm.id
                ORDER BY sk.ngay_dien_ra DESC";

        $rows = $this->db->query($sql)->fetchAll(PDO::FETCH_ASSOC);
        return array_map(fn($row) => new SuKien($row), $rows);
    }
   
    public function findById(int $id): ?SuKien {
        $stmt = $this->db->prepare(
            "SELECT * FROM su_kien WHERE id = ?"
        );
        $stmt->execute([$id]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        return $row ? new SuKien($row) : null;
    }
  
    public function isDuplicate(string $ten, string $ngay, int $excludeId = 0): bool {
        $sql    = "SELECT id FROM su_kien WHERE ten = ? AND ngay_dien_ra = ?";
        $params = [$ten, $ngay];

        if ($excludeId > 0) {
            $sql     .= " AND id != ?";
            $params[] = $excludeId;
        }

        $stmt = $this->db->prepare($sql);
        $stmt->execute($params);
        return (bool) $stmt->fetch();
    }

  
    public function insert(SuKien $sk): bool {
        $sql = "INSERT INTO su_kien
                    (ten, ngay_dien_ra, suc_chua, quy_mo, loai_id, ghi_chu)
                VALUES
                    (:ten, :ngay_dien_ra, :suc_chua, :quy_mo, :loai_id, :ghi_chu)";

        $stmt = $this->db->prepare($sql);
        return $stmt->execute($sk->toArray());
    }

 
    public function update(SuKien $sk): bool {
        $sql = "UPDATE su_kien
                SET    ten = :ten,
                       ngay_dien_ra = :ngay_dien_ra,
                       suc_chua = :suc_chua,
                       quy_mo   = :quy_mo,
                       loai_id  = :loai_id,
                       ghi_chu  = :ghi_chu
                WHERE  id = :id";

        $data       = $sk->toArray();
        $data['id'] = $sk->id;

        $stmt = $this->db->prepare($sql);
        return $stmt->execute($data);
    }
    public function delete(int $id): bool {
        $stmt = $this->db->prepare("DELETE FROM su_kien WHERE id = ?");
        return $stmt->execute([$id]);
    }
}
