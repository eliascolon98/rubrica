<?php

function con()
{ 
$echo = mysqli_connect("localhost","root","","rubrica");

    return $echo;
}


?>
