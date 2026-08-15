<?php
require_once __DIR__ . '/../models/SuKien.php';
require_once __DIR__ . '/../repositories/SuKienRepository.php';
require_once __DIR__ . '/../repositories/DanhMucRepository.php';

class SuKienController {
    private SuKienRepository  $repo;
    private DanhMucRepository $danhMucRepo;

    public function __construct() {
        $this->repo        = new SuKienRepository();
        $this->danhMucRepo = new DanhMucRepository();
    }

 
    public function index(): void {
        $danh_sach = $this->repo->getAll();
        require __DIR__ . '/../views/index.php';
    }

    public function create(): void {
        $danh_muc = $this->danhMucRepo->getAll();
        $loi      = '';
        require __DIR__ . '/../views/create.php';
    }

   
    public function store(): void {
        
        $ten      = trim($_POST['ten']          ?? '');
        $ngay     = trim($_POST['ngay_dien_ra'] ?? '');
        $sucChua  = (int)($_POST['suc_chua']    ?? 0);
        $loaiId   = (int)($_POST['loai_id']     ?? 0);
        $ghiChu   = trim($_POST['ghi_chu']      ?? '');

        if (!$ten || !$ngay || $sucChua <= 0 || !$loaiId) {
            $loi      = "Vui lòng nhập đầy đủ thông tin hợp lệ!";
            $danh_muc = $this->danhMucRepo->getAll();
            require __DIR__ . '/../views/create.php';
            return;
        }

       
        if ($this->repo->isDuplicate($ten, $ngay)) {
            $loi      = "Sự kiện '$ten' đã tồn tại vào ngày $ngay!";
            $danh_muc = $this->danhMucRepo->getAll();
            require __DIR__ . '/../views/create.php';
            return;
        }

       
        $sk = new SuKien([
            'ten'          => $ten,
            'ngay_dien_ra' => $ngay,
            'suc_chua'     => $sucChua,
            'loai_id'      => $loaiId,
            'ghi_chu'      => $ghiChu,
        ]);

        $this->repo->insert($sk);
        header("Location: index.php?thong_bao=them_thanh_cong");
        exit;
    }

   
    public function edit(): void {
        $id      = (int)($_GET['id'] ?? 0);
        $su_kien = $this->repo->findById($id);

        if (!$su_kien) {
            header("Location: index.php");
            exit;
        }

        $danh_muc = $this->danhMucRepo->getAll();
        $loi      = '';
        require __DIR__ . '/../views/edit.php';
    }

   
    public function update(): void {
        $id      = (int)($_POST['id']          ?? 0);
        $ten     = trim($_POST['ten']          ?? '');
        $ngay    = trim($_POST['ngay_dien_ra'] ?? '');
        $sucChua = (int)($_POST['suc_chua']    ?? 0);
        $loaiId  = (int)($_POST['loai_id']     ?? 0);
        $ghiChu  = trim($_POST['ghi_chu']      ?? '');

        if (!$ten || !$ngay || $sucChua <= 0 || !$loaiId) {
            $loi      = "Vui lòng nhập đầy đủ thông tin!";
            $su_kien  = $this->repo->findById($id);
            $danh_muc = $this->danhMucRepo->getAll();
            require __DIR__ . '/../views/edit.php';
            return;
        }

        if ($this->repo->isDuplicate($ten, $ngay, $id)) {
            $loi      = "Sự kiện '$ten' đã tồn tại vào ngày $ngay!";
            $su_kien  = $this->repo->findById($id);
            $danh_muc = $this->danhMucRepo->getAll();
            require __DIR__ . '/../views/edit.php';
            return;
        }

        $sk = new SuKien([
            'id'           => $id,
            'ten'          => $ten,
            'ngay_dien_ra' => $ngay,
            'suc_chua'     => $sucChua,
            'loai_id'      => $loaiId,
            'ghi_chu'      => $ghiChu,
        ]);

        $this->repo->update($sk);
        header("Location: index.php?thong_bao=sua_thanh_cong");
        exit;
    }
  
    public function delete(): void {
        $id = (int)($_GET['id'] ?? 0);
        $this->repo->delete($id);
        header("Location: index.php?thong_bao=xoa_thanh_cong");
        exit;
    }
}
