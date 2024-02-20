$(document).ready(function() {
    // 发送 Ajax 请求获取数据
    $.ajax({
        url: 'JSON/link.json',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // 创建表格
            var table = $('<table>').addClass('table');

            // 创建表头
            var thead = $('<thead>').append('<tr><th>' + data.columns.join('</th><th>') + '</th></tr>');
            table.append(thead);

            // 创建表格内容
            var tbody = $('<tbody>');

            // 填充表格内容
            $.each(data.rows, function(index, row) {
                var tr = $('<tr>').append('<td>' + row.Name + '</td><td>' + row.Age + '</td>');
                tbody.append(tr);
            });

            table.append(tbody);

            // 将表格添加到指定的 div 中
            $('#table').append(table);
        },
        error: function(xhr, status, error) {
            console.error('发生错误:', error);
        }
    });
});
