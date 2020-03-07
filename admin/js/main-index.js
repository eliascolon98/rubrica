$(".colombiamar-user__li").click(function () {
    location.href = "update_profile.php"
});
document.getElementById("plus-action").addEventListener("click", goShared);
document.getElementById("close-action").addEventListener("click", goFullMain);

function goShared() {
    var container = document.getElementById("main-flex-wrapper").classList;
    if (container.contains("full-main")) {
        container.remove("full-main");
        container.add("shared");
    }
}

function goFullMain() {
    var container = document.getElementById("main-flex-wrapper").classList;
    if (!container.contains("full-main")) {
        container.add("full-main");
        container.remove("shared");
    }
}

$('#confirm-delete').on('show.bs.modal', function (e) {
    $(this).find('.btn-ok').attr('href', $(e.relatedTarget).data('href'));

    $('.debug-url').html('Delete URL: <strong>' + $(this).find('.btn-ok').attr('href') + '</strong>');
});

var hoy = new Date();
var day = hoy.getDate();
var month = hoy.getMonth() + 1;
var year = hoy.getFullYear();
if (day < 10) {
    day = '0' + day
}

if (month < 10) {
    month = '0' + month
}

hoy = year + '-' + month + '-' + day;
document.getElementById("fecha").value = hoy;

/*validar información del usuario al loguear */
var fullUrl = window.location.href;
var urlComponents = fullUrl.split("#");
var data = urlComponents[urlComponents.length - 1];

if (data == "success") {
    alert("Noticia guardada con éxito.");
    location.href = "index.php";
} else if (data == "notFound") {
    alert("Error al guadar noticia.");
    location.href = "index.php";
}

var noti = '<div id="contenedor" class="c-1">' +
    '<div class="row row-modal">' +
    '<div class="modal-header">' +
    '<h3 class="modal-title" id="">Eliminar noticia</h3>' +
    '<i class="fas fa-times" id="btn-cerrar" onclick="salir()"></i>' +
    '</div>' +
    '<div class="modal-body">' +
    '<h2 class="card__title">¿Seguro que desea borrar ésta noticia?</h2>' +
    '</div>' +
    '<div class="modal-footer">' +
    '<button type="submit" class="colombiamar-btn btn-danger" onclick="salir()" style="margin-right: 10px;">Cancelar</button>' +
    '<button type="submit" class="btn-warning" onclick="delete_news()">Eliminar</button>' +
    '</div>' +
    '</div>' +
    '</div>';

var id_news = 0;
function confirm_delete(id) {
    $('.cont-modal').append(noti);
    $('.cont-modal').css({ 'display': 'flex' });
    id_news = id;
}

function delete_news() {
    $.ajax({
        url: "crud/delete-news.php",
        type: "POST",
        data: { id: id_news },
        dataType: "html",
        success: function (data) {
            if (data == 1) {
                location.href = "index.php";
            } else {
                alert("Error al borrar noticia");
            }
        }
    })
}
function salir() {
    $('.cont-modal').css({ 'display': 'none' });
    $('.c-1').css({ 'display': 'none' });
}
$("#contenedor").click(function(){
    alert("hola");
    $('.cont-modal').css({ 'display': 'none' });
    $('.c-1').css({ 'display': 'none' });
})