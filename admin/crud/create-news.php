<?php
require_once 'conexion.php';
$con = con();

$titulo=$_REQUEST["titulo"];
$descripcion=$_REQUEST["descripcion"];
$fecha=$_REQUEST["fecha"];

$foto=$_FILES["imagen"]["name"];
$ruta=$_FILES["imagen"]["tmp_name"];
$nombre_foto = str_replace(" ","",$foto);
$destino_img="images/".$nombre_foto;
copy($ruta,'../'.$destino_img);

$qry = mysqli_query($con, "INSERT into noticias (titulo,descripcion,ruta_img, fecha) 
values ('$titulo','$descripcion','$destino_img', '$fecha')");
if($qry){
    header("Location: ../index.php#success");
}else{
    header("Location: ../index.php#error");
}


?>