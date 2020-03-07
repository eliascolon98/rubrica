<!DOCTYPE html>
<?php 
require("seguridad.php"); 
require_once("crud/conexion.php");
@session_start(); 
$user= $_SESSION["usuarioactual"];
$con=con();
$qry="SELECT * FROM usuarios where id_usuario ='$user'";
$sql=mysqli_query($con,$qry);
$res=  mysqli_fetch_array($sql); 
$res[6] = ($res[6] == 'admin') ? "": header("Location: ../index.html");

?>
<html lang="es">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>COLOMBIAMAR</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="assets/fonts/fontawesome-5.7.2/css/all.min.css" />
    <link rel="stylesheet" href="https://unpkg.com/simplebar@latest/dist/simplebar.min.css" />
    <link rel="stylesheet" href="css/colombiamar-style.css" />
    <link rel="stylesheet" href="css/layout-tools.css" />
    <script src="tinymce/js/tinymce/tinymce.js"></script>
    <script>
    tinymce.init({
        selector: 'textarea',
        height: 300,
        menubar: false,
        plugins: [
            'advlist autolink lists link image charmap print preview anchor textcolor colorpicker'
        ],
        language: 'es_MX',
        toolbar: 'undo redo cut copy paste selectall |  fontsizeselect | bold italic underline forecolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | print link',
        fontsize_formats: '8pt 10pt 12pt 13pt 14pt 16pt 18pt 20pt 22pt 24pt 26pt 28pt 30pt 32pt 34pt 36pt 42pt'
    });
    </script>
    <link rel="stylesheet" href="css/login-styles.css" />
</head>

<body class="">
    <div class="main-wrapper">
        <header id="colombiamar-header" class="colombiamar-header">
            <div class="colombiamar-header__title">
                <span id="menu-sw" class="colombiamar-header__menu-sw"><i class="fas fa-bars"></i></span>
                <span class="hidable">Bienvenido
                    <span id="user-name"
                        class="colombiamar-header__user-name"><?php echo $res['nombre'] ?></span></span>
                <span class="colombiamar-header__colombiamar-label">COLOMBIAMAR</span>
            </div>
            <div class="colombiamar-header__menu-options">
                <ul class="colombiamar-header__options-ul">

                    <li id="colombiamar-notification-sw" class="colombiamar-header__options-li">
                        <a href="#"></a>
                        <div id="colombiamar-notification" class="colombiamar-notifications hide">
                        </div>
                    </li>
                    <li id="colombiamar-user-sw" class="colombiamar-header__options-li">
                        <a href="#"><i class="fas fa-user"></i></a>
                        <div id="colombiamar-user" class="colombiamar-user hide">
                            <img class="colombiamar-user__photo" src="http://lorempixel.com/400/400/people/" alt="">
                            <h3 class="colombiamar-user__name">John Doe</h3>
                            <h3 class="colombiamar-user__info">johndoe@gmail.com</h3>
                            <ul class="colombiamar-user__menu">
                                <li class="colombiamar-user__li">
                                    <i class="fas fa-user"></i>
                                    <a href="update_profile.php">Perfil de Usuario</a>
                                </li>
                                <li class="colombiamar-user__li">
                                    <i class="fas fa-sign-out-alt"></i>
                                    <a href="index.html">Cerrar sesión</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="colombiamar-header__options-li">
                        <a href="#"></a>
                    </li>
                </ul>
            </div>
        </header>
        <div class="body-container" data-simplebar>
            <div id="main-flex-wrapper" class="main-flex-wrapper full-main">
                <div id="main-card" class="card">
                    <div class="card__header">
                        <h2 class="card__title">Actualizar mi información personal</h2>

                    </div>
                    <div class="card__body">
                        <form id="formProfile">
                            <div class="container">
                                <div class="row">

                                    <input type="hidden" name="id" value="<?php echo $user ?>">
                                    <div class="col-md-6">
                                        <label class="card__title" for="">Nombre</label>
                                        <input class="login-form__input" type="text" name="nombre"
                                            value="<?php echo $res['nombre'] ?>">
                                    </div>
                                    <div class="col-md-6">
                                        <label class="card__title" for="">Correo</label>
                                        <input class="login-form__input" type="email" name="correo"
                                            value="<?php echo $res['correo'] ?>">
                                    </div>
                                    <div class="col-md-6">
                                        <label class="card__title" for="">Télefono</label>
                                        <input class="login-form__input" type="number" name="telefono"
                                            value="<?php echo $res['telefono'] ?>">
                                    </div>
                                    <div class="col-md-6">
                                        <label class="card__title" for="">Usuario</label>
                                        <input class="login-form__input" type="text" name="usuario"
                                            value="<?php echo $res['usuario'] ?>">
                                    </div>

                                    <div class="col-md-4">
                                        <label class="card__title" for="">Nueva Contraseña</label>
                                        <input class="login-form__input" disabled type="password"
                                            autocomplete="contraseña" id="pass" name="pass">
                                    </div>
                                    <div class="col-md-4">
                                        <label class="card__title" for="">Confirmar Contraseña</label>
                                        <input class="login-form__input" disabled type="password"
                                            autocomplete="nueva-contraseña" id="passVerify">
                                    </div>
                                    <div class="col-md-4">
                                        <button class="login-form__submit btn-active" type="button"
                                            style="margin-top: 20px;">
                                            Habilitar cambio de contraseña
                                        </button>
                                    </div>
                                    <input type="hidden" id="status" value="false">
                                    <div class="col-md-6">
                                        <button class="login-form__submit btn-update-profile" type="button">
                                            Actualizar
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="sidebar" class="sidebar">
        <div class="sidebar__header">
            <span class="sidebar__header__user-rol">Administrador <i class="fas fa-caret-right"></i></span>
        </div>
        <div class="sidebar__menu">
            <div class="sidebar__menu-set">
                <ul class="sidebar__menu-set-ul">
                    <li class="sidebar__menu-set-li">
                        <a href="#"><i class="fas fa-home"></i>Inicio</a>
                    </li>
                    <li class="sidebar__menu-set-li ">
                        <a href="index.php"><i class="fas fa-list-ul"></i>Gestionar noticias</a>
                    </li>
                    <li class="sidebar__menu-set-li sidebar__menu-set-li--active">
                        <a href="add_news.php"><i class="fas fa-plus-circle"></i>Agregar noticia</a>
                    </li>
                </ul>
            </div>

        </div>
        <div class="sidebar__brand-container">
            <div class="sidebar__logo">
                <img src="assets/img/logo.png" alt="" />
            </div>
            <div class="sidebar__copy">
                Copyright &copy; 2019 Puerto de Cartagena
                <br />
                Desarrollado por <span>Biinyu Games Studios</span>
            </div>
        </div>
    </div>
    <script src="js/main.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/simplebar@latest/dist/simplebar.js"></script>
    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/main-profile"></script>
</body>

</html>