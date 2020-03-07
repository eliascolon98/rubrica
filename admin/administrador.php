<!DOCTYPE html>
<?php 
require("seguridad.php"); 
require_once("crud/conexion.php");
@session_start(); 
$user= $_SESSION["usuarioactual"];
$con=con();
$qry="SELECT * FROM usuario_login where id_login ='$user'";
$sql=mysqli_query($con,$qry);
$res=  mysqli_fetch_array($sql); 
$res[3] = ($res[3] == 'admin') ? "": header("Location: ../index.html");

$qry2=mysqli_query($con, "SELECT * FROM docentes where id_login ='$user'");
$res2=  mysqli_fetch_array($qry2); 
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

</head>

<body class="">
<div class="cont-modal" id="cont-m"></div>
    <div class="main-wrapper">
        <header id="colombiamar-header" class="colombiamar-header">
            <div class="colombiamar-header__title">
                <span id="menu-sw" class="colombiamar-header__menu-sw"><i class="fas fa-bars"></i></span>
                <span class="hidable">Bienvenido
                    <span id="user-name" class="colombiamar-header__user-name"><?php echo $res2['nombre_evaluador'] ?></span></span>
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
                                    <a href="../salir.php">Cerrar sesión</a>
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
                        <h2 class="card__title">Mis noticias</h2>
                        <ul class="card__actions">
                            <li id="plus-action" class="card__btn-action"><i class="fas fa-plus-circle"></i></li>
                        </ul>
                    </div>
                    <div class="card__body">
                        <table class="table table-striped">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Evaluador</th>
                                        <th>Nombre del proyecto</th>
                                        <th style="text-align: center;">puntuación total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody class="list_table">

                                </tbody>
                            </table>
                        </table>
                    </div>
                </div>
                <div id="side-card" class="card ml-20 col-5">
                    <div class="card__header">
                        <h2 class="card__title">Agregar noticia</h2>
                        <ul class="card__actions">
                            <li id="close-action" class="card__btn-action"><i class="far fa-times-circle"></i></li>
                        </ul>
                    </div>
                    <div class="card__body">
                        <form action="crud/create-news.php" method="POST" enctype="multipart/form-data">
                            <div class="input-wrapper">
                                <span class="input-wrapper__icon"><i class="fas fa-align-left"></i></span>
                                <input class="input-wrapper__input" type="text" placeholder="Título" name="titulo">
                            </div>

                            <div class="input-wrapper" id="descripcion">
                                <textarea class="input-wrapper__input" name="descripcion" rows="5"></textarea>
                            </div>

                            <div class="input-wrapper">
                                <input class="input-wrapper__input" type="file" name="imagen" accept="image/*" required>
                            </div>

                            <input type="hidden" id="fecha" name="fecha">
                            <div class="form-actions ta-right">
                                <button type="submit" class="colombiamar-btn btn-primary">Guardar</button>
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
                    <li class="sidebar__menu-set-li sidebar__menu-set-li--active">
                        <a href="index.php"><i class="fas fa-list-ul"></i>Gestionar noticias</a>
                    </li>
                    <li class="sidebar__menu-set-li ">
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

    <script src="https://cdn.jsdelivr.net/npm/simplebar@latest/dist/simplebar.js"></script>
    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
    </script>

    <script src="js/main.js"></script>
    <script src="js/main-index.js"></script>
    <script src="js/list-news.js"></script>
</body>

</html>