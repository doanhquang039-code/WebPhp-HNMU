<?php $title = 'Sửa Sự kiện'; require __DIR__ . '/layout_header.php'; ?>

<h2>Chỉnh sửa Sự kiện</h2>
<a href="index.php" style="color:#3498db;">&larr; Quay lại danh sách</a>
<hr style="margin: 15px 0;">

<?php if ($loi): ?>
    <div class="alert alert-danger"><?php echo $loi; ?></div>
<?php endif; ?>

<form method="POST" action="index.php?action=update">
    <input type="hidden" name="id" value="<?php echo $su_kien->id; ?>">

    <label>Tên sự kiện <span style="color:red">*</span></label>
    <input type="text" name="ten" value="<?php echo htmlspecialchars($su_kien->ten); ?>" required>

    <label>Ngày diễn ra <span style="color:red">*</span></label>
    <input type="date" name="ngay_dien_ra" value="<?php echo $su_kien->ngayDienRa; ?>" required>

    <label>Sức chứa <span style="color:red">*</span></label>
    <input type="number" name="suc_chua" value="<?php echo $su_kien->sucChua; ?>" min="1" required>

    <label>Loại sự kiện <span style="color:red">*</span></label>
    <select name="loai_id" required>
        <option value="">-- Chọn loại --</option>
        <?php foreach ($danh_muc as $dm): ?>
            <option value="<?php echo $dm->id; ?>"
                <?php echo $dm->id === $su_kien->loaiId ? 'selected' : ''; ?>>
                <?php echo htmlspecialchars($dm->tenLoai); ?>
            </option>
        <?php endforeach; ?>
    </select>

    <label>Ghi chú</label>
    <textarea name="ghi_chu" rows="3"><?php echo htmlspecialchars($su_kien->ghiChu); ?></textarea>

    <div style="margin-top:20px;">
        <button type="submit" class="btn btn-warning">✏️ Cập nhật</button>
        <a href="index.php" class="btn btn-primary" style="margin-left:10px;">Hủy</a>
    </div>
</form>

<?php require __DIR__ . '/layout_footer.php'; ?>
