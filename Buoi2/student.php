<?php
$students = [
    ['name' => 'Long', 'midterm' => 7.5, 'final' => 8.0],
    ['name' => 'Vũ', 'midterm' => 5.0, 'final' => 6.0],
    ['name' => 'Chí',   'midterm' => 4.0, 'final' => 5.0],
];

function calculateAverage($midterm, $final) {
    return ($midterm + $final) / 2;
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Danh sách sinh viên</title>
    <style>
        body { font-family: Helvetica, sans-serif; }
        table { border-collapse: collapse; width: 100%; max-width: 600px; }
        th, td { border: 1px solid #ccc; padding: 8px; text-align: center; }
        th { background: #f0f0f0; }
    </style>
</head>
<body>
    <table>
        <tr>
            <th>Tên</th>
            <th>Giữa kỳ</th>
            <th>Cuối kỳ</th>
            <th>Trung bình</th>
            <th>Kết quả</th>
        </tr>
        <?php foreach ($students as $student): 
            $average = calculateAverage($student['midterm'], $student['final']);
            $result = $average >= 5 ? 'Đạt' : 'Chưa đạt';
        ?>
        <tr>
            <td><?= htmlspecialchars($student['name'], ENT_QUOTES, 'UTF-8') ?></td>
            <td><?= $student['midterm'] ?></td>
            <td><?= $student['final'] ?></td>
            <td><?= number_format($average, 1) ?></td>
            <td><?= $result ?></td>
        </tr>
        <?php endforeach; ?>
    </table>
</body>
</html>