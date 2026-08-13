<?php $title = 'Thêm Sự kiện mới'; require __DIR__ . '/layout_header.php'; ?>

<h2>Thêm Sự kiện mới</h2>
<a href="index.php" style="color:#3498db;">&larr; Quay lại danh sách</a>
<hr style="margin: 15px 0;">

<?php if ($loi): ?>
    <div class="alert alert-danger"><?php echo $loi; ?></div>
<?php endif; ?>

<form method="POST" action="index.php?action=store">
    <label>Tên sự kiện <span style="color:red">*</span></label>
    <input type="text" name="ten" placeholder="VD: Workshop PHP Cơ bản" required>

    <label>Ngày diễn ra <span style="color:red">*</span></label>
    <input type="date" name="ngay_dien_ra" required>

    <label>Sức chứa (số người tối đa) <span style="color:red">*</span></label>
    <input type="number" name="suc_chua" min="1" placeholder="VD: 50" required>

    <label>Loại sự kiện <span style="color:red">*</span></label>
    <select name="loai_id" required>
        <option value="">-- Chọn loại --</option>
        <?php foreach ($danh_muc as $dm): ?>
            <option value="<?php echo $dm->id; ?>"><?php echo htmlspecialchars($dm->tenLoai); ?></option>
        <?php endforeach; ?>
    </select>

    <label>Ghi chú</label>
    <textarea name="ghi_chu" rows="3" placeholder="Ghi chú thêm (không bắt buộc)"></textarea>

    <div style="margin-top:20px;">
        <button type="submit" class="btn btn-success">💾 Lưu sự kiện</button>
        <a href="index.php" class="btn btn-primary" style="margin-left:10px;">Hủy</a>
    </div>
</form>

<?php require __DIR__ . '/layout_footer.php'; ?>
