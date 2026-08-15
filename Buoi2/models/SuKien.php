<?php
class SuKien {
    public int    $id;
    public string $ten;
    public string $ngayDienRa;
    public int    $sucChua;
    public string $quyMo;
    public int    $loaiId;
    public string $ghiChu;
    public string $tenLoai;

    public function __construct(array $data = []) {
        $this->id         = (int)($data['id']            ?? 0);
        $this->ten        = $data['ten']                 ?? '';
        $this->ngayDienRa = $data['ngay_dien_ra']        ?? '';
        $this->sucChua    = (int)($data['suc_chua']      ?? 0);
        $this->quyMo      = $data['quy_mo']              ?? $this->xacDinhQuyMo($this->sucChua);
        $this->loaiId     = (int)($data['loai_id']       ?? 0);
        $this->ghiChu     = $data['ghi_chu']             ?? '';
        $this->tenLoai    = $data['ten_loai']            ?? '';
    }


   
    public function xacDinhQuyMo(int $sucChua): string {
        if ($sucChua >= 100) return 'Lớn';
        if ($sucChua >= 50)  return 'Vừa';
        return 'Nhỏ';
    }

    /**
     * object -> [] -> repo
     */
    public function toArray(): array {
        return [
            'ten'          => $this->ten,
            'ngay_dien_ra' => $this->ngayDienRa,
            'suc_chua'     => $this->sucChua,
            'quy_mo'       => $this->xacDinhQuyMo($this->sucChua),
            'loai_id'      => $this->loaiId,
            'ghi_chu'      => $this->ghiChu,
        ];
    }
}
