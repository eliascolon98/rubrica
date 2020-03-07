function validar_pass() {
    var pass = $("#pass").val();
    var pass_two = $("#passVerify").val();
    var status = $("#status").val();
    if (status == "false") {
        return true;
    } else {
        if (pass == "") {
            alert("Debe escribir la contraseña");
            return false;
        } else if (pass_two == "") {
            alert("Debe confirmar su contraseña");
            return false;
        } else if (pass != pass_two) {
            alert("Las contraseñas no coinciden");
            return false;
        } else {
            return true;
        }
    }

}
var click = 0;
$(".btn-active").click(function () {

    if (click == 0) {
        $(".btn-active").text("Desactivar cambio de contraseña");
        $("#pass").removeAttr("disabled", "disabled");
        $("#passVerify").removeAttr("disabled", "disabled");
        $("#pass").focus();
        $("#status").val("true");
        click += 1;

    } else {
        $(".btn-active").text("Habilitar cambio de contraseña");
        $("#pass").attr("disabled", "disabled");
        $("#passVerify").attr("disabled", "disabled");
        $("#status").val("false");
        click -= 1;
    }

})


$(".btn-update-profile").click(function () {
    if (validar_pass() == true) {
        var info = $("#formProfile").serialize();
        $.ajax({
            url: "crud/update-profile.php",
            type: "POST",
            data: info,
            dataType: "html",
            success: function (data) {
                if (data == 1) {
                    alert("Información actualizada");
                    location.href = "update_profile.php";
                } else {
                    alert("Error al actualizar");
                    location.href = "update_profile.php";
                }
            }
        })
    }

})