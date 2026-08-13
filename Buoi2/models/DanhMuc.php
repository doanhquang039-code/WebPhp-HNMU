<?php
/**
 * Model DanhMuc - Lớp thực thể thuần, không chứa SQL
 */
class DanhMuc {
    public int    $id;
    public string $tenLoai;

    public function __construct(array $data = []) {
        $this->id      = (int)($data['id']       ?? 0);
        $this->tenLoai = $data['ten_loai']        ?? '';
    }
}
