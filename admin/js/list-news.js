$.ajax({
    url: "crud/read-news.php",
    dataType: "json",
    success: function (data) {
        var list_table = '';
        for (var i = 0; i < data.length; i++) {
            list_table += '<tr>' +
                '<td>' + data[i].docente + '</td>' +
                '<td style="width: 45%;">' + data[i].titulo + '</td>' +
                '<td style="width: 15%;text-align: center;">' + data[i].total + ' </td>' +
                '<td style="width: 15%;text-align: center;"> <a href= "list_rubricas.php?id_docente=' + data[i].id + ' "> Ver más</a></td>' +
                '</tr>';
        }
        $(".list_table").append(list_table);
    }
})