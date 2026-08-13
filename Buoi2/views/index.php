<?php $title = 'Danh sách Sự kiện'; require __DIR__ . '/layout_header.php'; ?>

<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
    <h2>Danh sách Sự kiện</h2>
    <a href="index.php?action=create" class="btn btn-success">+ Thêm sự kiện</a>
</div>

<?php
$tb_map = [
    'them_thanh_cong' => 'Thêm sự kiện thành công!',
    'sua_thanh_cong'  => 'Cập nhật sự kiện thành công!',
    'xoa_thanh_cong'  => 'Đã xóa sự kiện!',
];
$tb = $_GET['thong_bao'] ?? '';
if (isset($tb_map[$tb])): ?>
    <div class="alert alert-success"><?php echo $tb_map[$tb]; ?></div>
<?php endif; ?>

<?php if (empty($danh_sach)): ?>
    <p style="color:#888; text-align:center;">Chưa có sự kiện nào. <a href="index.php?action=create">Thêm ngay!</a></p>
<?php else: ?>
    <table>
        <thead>
            <tr>
                <th>STT</th>
                <th>Tên sự kiện</th>
                <th>Ngày diễn ra</th>
                <th>Sức chứa</th>
                <th>Quy mô</th>
                <th>Loại</th>
                <th>Thao tác</th>
            </tr>
        </thead>
        <tbody>
        <?php $stt = 1; foreach ($danh_sach as $sk):
            $badgeClass = match($sk->quyMo) {
                'Lớn'  => 'badge-lon',
                'Vừa'  => 'badge-vua',
                default => 'badge-sm',
            };
        ?>
            <tr>
                <td><?php echo $stt++; ?></td>
                <td>
                    <strong><?php echo htmlspecialchars($sk->ten); ?></strong>
                    <?php if ($sk->ghiChu): ?>
                        <br><small style="color:#888;"><?php echo htmlspecialchars($sk->ghiChu); ?></small>
                    <?php endif; ?>
                </td>
                <td><?php echo date('d/m/Y', strtotime($sk->ngayDienRa)); ?></td>
                <td><?php echo $sk->sucChua; ?> người</td>
                <td><span class="badge <?php echo $badgeClass; ?>"><?php echo $sk->quyMo; ?></span></td>
                <td><?php echo htmlspecialchars($sk->tenLoai); ?></td>
                <td>
                    <a href="index.php?action=edit&id=<?php echo $sk->id; ?>"
                       class="btn btn-warning" style="padding:5px 12px;">Sửa</a>
                    <a href="index.php?action=delete&id=<?php echo $sk->id; ?>"
                       class="btn btn-danger" style="padding:5px 12px;"
                       onclick="return confirm('Bạn có chắc muốn xóa?')">Xóa</a>
                </td>
            </tr>
        <?php endforeach; ?>
        </tbody>
    </table>
<?php endif; ?>

<?php require __DIR__ . '/layout_footer.php'; ?>
