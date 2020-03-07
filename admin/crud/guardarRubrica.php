<?php
require_once '../../js/conexion.php';
$con = con();
$id_login = 2;
$evaluador = @$_POST["evaluador"];
$institucion = @$_POST["institucion"];
$email = @$_POST["email"];
$telefono = @$_POST["telefono"];
$comentarios = @$_POST["comentarios"];

$titulo = @$_POST["titulo"];
$ponente_uno = @$_POST["ponente_uno"];
$ponente_dos = @$_POST["ponente_dos"];
$tipo_proyecto = @$_POST["tipo_proyecto"];
$subtipo_proyecto = @$_POST["subtipo_proyecto"];

$opt_1_1=@$_POST["opt_one_one"];
$opt_1_2=@$_POST["opt_one_one"];
$opt_2_1=@$_POST["opt_two_one"];
$opt_2_2=@$_POST["opt_two_two"];
$opt_3_1=@$_POST["opt_three_one"];
$opt_3_2=@$_POST["opt_three_two"];
$opt_4_1=@$_POST["opt_four_one"];
$opt_4_2=@$_POST["opt_four_two"];
$opt_5_1=@$_POST["opt_five_one"];
$opt_5_2=@$_POST["opt_five_two"];
$opt_6_1=@$_POST["opt_six_one"];
$opt_6_2=@$_POST["opt_six_two"];
$opt_7_1=@$_POST["opt_seven_one"];
$opt_7_2=@$_POST["opt_seven_two"];
$opt_8_1=@$_POST["opt_eigth_one"];
$opt_8_2=@$_POST["opt_eigth_two"];
$opt_9_1=@$_POST["opt_nine_one"];
$opt_9_2=@$_POST["opt_nine_two"];
$opt_10_1=@$_POST["opt_ten_one"];
$opt_10_2=@$_POST["opt_ten_two"];
$opt_11_1=@$_POST["opt_elev_one"];
$opt_11_2=@$_POST["opt_elev_two"];

$subt1 = $_POST["subt1"];
$subt2 = $_POST["subt2"];
$subt3 = $_POST["subt3"];
$total = $_POST["total"];


$sel = "SELECT * FROM proyectos where titulo = '$titulo'";
$qry_v = mysqli_query($con, $sel) or die (mysqli_error($con)); 

if(mysqli_num_rows($qry_v) > 0){
    header("location: ../index.php#exist");
}else{
    $docente = "INSERT into docentes (nombre_evaluador, institucion, telefono, id_login) 
    values ('$evaluador', '$institucion', '$telefono', '$id_login')";
    $docente_qry = mysqli_query($con, $docente) or die (mysqli_error($con));
    if($docente_qry){
        $docente_select = "SELECT * FROM docentes order by id_docente desc limit 1 ";
        $docente_qry_id = mysqli_query($con, $docente_select) or die (mysqli_error($con)); 
        $docente_id = mysqli_fetch_array($docente_qry_id);

        $proyecto = "INSERT into proyectos (titulo, nombre_ponente_uno, nombre_ponente_dos, tipo_proyecto, subtipo_proyecto, id_docente)
        values ('$titulo', '$ponente_uno', '$ponente_dos', '$tipo_proyecto', '$subtipo_proyecto', '$docente_id[0]')";
        $qry = mysqli_query($con, $proyecto) or die (mysqli_error($con));

        if($qry){
            $proyecto_select = "SELECT * FROM proyectos where titulo = '$titulo'";
            $proyecto_qry = mysqli_query($con, $proyecto_select) or die (mysqli_error($con)); 
            $proyecto_id = mysqli_fetch_array($proyecto_qry);
        
            $sql2 = "INSERT INTO evaluaciones (
                titulo_uno,titulo_dos,
                introduccion_uno, introduccion_dos,
                justificacion_uno, justificacion_dos,
                descripcion_uno, descripcion_dos,
                objetivo_general, objetivo_especifico,
                marco_referencial_uno, marco_referencial_dos,
                metodologia_uno, metodologia_dos,
                resultado_uno, resultado_dos,
                conclusion_uno, conclusion_dos,
                bibliografia_uno, bibliografia_dos,
                presentacion_uno, presentacion_dos, 
                id_proyecto) values (
                    '$opt_1_1','$opt_1_2',
                    '$opt_2_1','$opt_2_2',
                    '$opt_3_1','$opt_3_2',
                    '$opt_4_1','$opt_4_2',
                    '$opt_5_1','$opt_5_2',
                    '$opt_6_1','$opt_6_2',
                    '$opt_7_1','$opt_7_2',
                    '$opt_8_1','$opt_8_2',
                    '$opt_9_1','$opt_9_2',
                    '$opt_10_1','$opt_10_2',
                    '$opt_11_1','$opt_11_2',
                    '$proyecto_id[0]'
                )";
            $qry2 = mysqli_query($con, $sql2) or die(mysqli_error($con));

            if($qry2){
                $eva_select = "SELECT * FROM evaluaciones where id_proyecto = '$proyecto_id[0]'";
                $eva_qry = mysqli_query($con, $eva_select) or die (mysqli_error($con)); 
                $eva_id = mysqli_fetch_array($eva_qry);
            
                $resultado = "INSERT into resultado (subtotal_1, subtotal_2, subtotal_3, total, id_evaluacion)
                values ('$subt1', '$subt2', '$subt3', '$total', '$eva_id[0]')";
                $res_qry = mysqli_query($con, $resultado) or die (mysqli_error($con));
            
                if($res_qry){
                    
                    header("location: ../index.php#success");
                   
                }else{
                     header("location: ../index.php#error");
                    
                }
            }
        }
    }
    
}



?>