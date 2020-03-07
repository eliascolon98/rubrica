<?php
require_once 'conexion.php';
$con = con();
$id = $_POST['id'];
      
$qry="DELETE FROM noticias WHERE id_noticia ='$id'  ";
$sql=mysqli_query($con,$qry);
                              
if(!$sql){
      echo 2;
}else{
      echo 1;
}
    
      
?>
    
    
