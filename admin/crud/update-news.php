<?php
require_once 'conexion.php';
$con = con();
$id = $_POST['id_news'];
$titulo=$_POST["titulo"];
$descripcion=$_POST["descripcion"];
$img_copy=$_POST["img_copy"];

$foto=$_FILES["imagen"]["name"];
$ruta=$_FILES["imagen"]["tmp_name"];
$nombre_foto = str_replace(" ","",$foto);
$destino_img="images/".$nombre_foto;

if($foto == ""){
    $qry = mysqli_query($con, "UPDATE noticias set titulo = '$titulo',
    descripcion = '$descripcion', ruta_img = '$img_copy' where id_noticia = $id") 
    or die (mysqli_error($con)); 
}else{
    copy($ruta,'../'.$destino_img);
    $qry = mysqli_query($con, "UPDATE noticias set titulo = '$titulo',
    descripcion = '$descripcion', ruta_img = '$destino_img' where id_noticia = $id")
    or die (mysqli_error($con));
}

if($qry){
    header("Location: ../update_news.php?id=$id");
}else{
    header("Location: ../update_news.php?id=$id");
}