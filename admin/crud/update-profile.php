<?php
require_once 'conexion.php';
$con = con();
$id = @$_POST['id'];
$nombre=@$_POST["nombre"];
$correo=@$_POST["correo"];
$telefono=@$_POST["telefono"];
$usuario=@$_POST["usuario"];
$pass=@$_POST["pass"];

if($pass == ""){
    $qry = mysqli_query($con, "UPDATE usuarios set usuario = '$usuario',
    correo = '$correo', telefono = '$telefono', nombre = '$nombre'
    where id_usuario = '$id'") or die (mysqli_error($con)); 
}else{
    $encode_pass = password_hash($pass, PASSWORD_DEFAULT);
    
    $qry = mysqli_query($con, "UPDATE usuarios set usuario = '$usuario',
    password = '$encode_pass', correo = '$correo', telefono = '$telefono',
    nombre = '$nombre' where id_usuario = '$id'") or die (mysqli_error($con)); 
}

if($qry){
    echo 1;
    // header("Location: ../update_news.php?id=$id");
}else{
    // header("Location: ../update_news.php?id=$id");
    echo 2;
}