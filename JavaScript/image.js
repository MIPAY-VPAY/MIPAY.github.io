$(document).ready(function() {
    // 发送 Ajax 请求获取数据
    $.ajax({
        url: 'JSON/image.json',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            var container = $('#container');

            // 遍历从JSON文件获取的图片数据
            data.images.forEach(function(imageSrc) {
                // 创建图片元素并加载
                $('<img>').attr('src', imageSrc).on('load', function() {
                    // 使用onload事件确保图片加载完毕后再显示
                    $('<div>').addClass('item').append($(this)).appendTo(container);
                });
            });
        },
        error: function(xhr, status, error) {
            console.error("Error loading JSON: " + error);
        }
    });
});
