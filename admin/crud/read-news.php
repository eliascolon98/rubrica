<?php

header('Access-Control-Allow-Origin: *'); 

require_once("conexion.php");

$link = con();
$array = array();

    $proyecto = "SELECT * FROM docentes order by id_docente DESC";
    $result = mysqli_query($link, $proyecto) or die(mysqli_error($link));
    while ($datos = mysqli_fetch_array($result)) {
        $pro = "SELECT * FROM proyectos where id_docente = '$datos[0]'";
        $result0 = mysqli_query($link, $pro) or die(mysqli_error($link));
        $datos0 = mysqli_fetch_array($result0);

        $eva = "SELECT * FROM evaluaciones where id_proyecto = '$datos0[0]'";
        $result2 = mysqli_query($link, $eva) or die(mysqli_error($link));
        $datos2 = mysqli_fetch_array($result2);

        $res= "SELECT * FROM resultado where id_evaluacion = '$datos2[0]'";
        $result3 = mysqli_query($link, $res) or die(mysqli_error($link));
        $datos3 = mysqli_fetch_array($result3);

        $docente = $datos['nombre_evaluador'];
        $id = $datos0['id_proyecto'];
        $titulo = $datos0['titulo'];
        $id_docente = $datos0['id_docente'];
        $total = $datos3['total'];

        $array[] = array(
            'id' => $id,
            'docente' => $docente,
            'titulo' => $titulo,
            'id_docente' => $id_docente,
            'total' => $total
        );
        
    }
    


$json_string = json_encode($array, JSON_UNESCAPED_UNICODE);
echo $json_string;