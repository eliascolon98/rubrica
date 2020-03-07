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
    <title>Rúbrica nisinú</title>
    <link rel="stylesheet" href="assets/fonts/fontawesome-5.7.2/css/all.min.css" />
    <link rel="stylesheet" href="style_rubrica/index-styles.css" />
    <link rel="stylesheet" href="style_rubrica/responsive.css" />
    <link rel="stylesheet" href="style_rubrica/bootstrap.min.css" />


</head>

<body>
    <div class="login-wrapper">

        <div id="login" class="login-form">
            <div id="login-form-w" class="login-form__wrapper">
                <h3 class="login-form__title">RÚBRICA DE EVALUACIÓN DE PROYECTOS</h3>

                <form id="formPrueba" method="POST" action="js/guardarRubrica.php">
                    <div class="row row-evaluacion">
                        <div class="col-12">
                            <label class="login-form__label text-center" for="">DATOS DEL EVALUADOR</label>
                            <hr>
                        </div>

                        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                            <label class="login-form__label" for="">Nombre</label>
                            <input id="ponente_uno" name="evaluador" class="login-form__input" type="text"
                                placeholder="Nombre completo" required>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                            <label class="login-form__label" for="">Institución</label>
                            <input id="ponente_dos" name="institucion" class="login-form__input" type="text"
                                placeholder="Institucación" required>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                            <label class="login-form__label" for="">E-mail</label>
                            <input id="ponente_uno" name="email" class="login-form__input" type="email"
                                placeholder="Email personal" required>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                            <label class="login-form__label" for="">Número telefónico</label>
                            <input id="ponente_dos" name="telefono" class="login-form__input" type="number"
                                placeholder="Teléfono o Celular" required>
                        </div>
                    </div>
                    <div class="login-form__fields ">
                        <label class="login-form__label" for="">TÍTULO DEL PROYECTO</label>
                        <input class="login-form__input" type="text" name="titulo" id="titulo"
                            placeholder="Nombre completo del proyecto" required>
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                <label class="login-form__label" for="">PONENTE 1</label>
                                <input id="ponente_uno" name="ponente_uno" class="login-form__input" type="text"
                                    placeholder="Nombre completo" required>
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                <label class="login-form__label" for="">PONENTE 2</label>
                                <input id="ponente_dos" name="ponente_dos" class="login-form__input" type="text"
                                    placeholder="Nombre completo" required>
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                <label class="login-form__label" for="">TIPO DE PROYECTO</label>
                                <select name="tipo_proyecto" class="login-form__input" required>
                                    <option value="">Seleccionar</option>
                                    <option value="investigacion">De investigación</option>
                                    <option value="innovacion y/o desarrollo">De innovación y/o desarrollo</option>
                                </select>
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                <label class="login-form__label" for="">SUBTIPO DE PROYECTO</label>
                                <select name="subtipo_proyecto" class="login-form__input" required>
                                    <option value="">Seleccionar</option>
                                    <option value="Propuesta">Propuesta</option>
                                    <option value="En curso">En curso</option>
                                    <option value="Terminada">Terminada</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <br><label for="">Instrucciones: Seleccionar una respues para cada ítem. Utilice la escala de 1
                        a 3.</label> <br>
                    <div class="row">
                        <div class="col-7"></div>
                        <div class="col-12">
                            <table class="table table-bordered  table-movil ">
                                <tr class="text-center">
                                    <td class="t-title" rowspan="2" style="vertical-align: inherit;">Indice</td>
                                    <td class="t-title">Excelente</td>
                                    <td class="t-title">Aceptable</td>
                                    <td class="t-title">Deficiente</td>
                                </tr>
                                <tr class="text-center">
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                </tr>
                            </table>
                            <div class="table-responsive-sm">
                                <table class="table table-bordered w-auto">

                                    <tbody class="table-body">
                                        <!-- CABECERA DEL FORMULARIO -->
                                        <tr class="text-center table-desk">
                                            <td class="align-middle t-title" rowspan="2" style="width: 58%;">INDICADOR
                                            </td>
                                            <td class="t-title">Excelente</td>
                                            <td class="t-title">Aceptable</td>
                                            <td class="t-title">Deficiente</td>
                                        </tr>
                                        <tr class="text-cente table-desk">
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                        </tr>
                                        <!-- SECCIÓN DEL TÍTULO -->
                                        <tr class="text-center">
                                            <td class="t-title">1. Título</td>
                                            <td colspan="3" class="bg-light"></td>
                                        </tr>
                                        <tr class="text-center tr-body">
                                            <td class="align-middle text-left">Describe de forma concreta el objeto de
                                                estudio del proyecto</td>
                                            <td colspan="3">
                                                <select name="opt_one_one" id="opt_one_one" class="login-form__input"
                                                    required>
                                                    <option value="">Seleccionar</option>
                                                    <option value="Excelente">1 - Excelente</option>
                                                    <option value="Aceptable">2 - Aceptable</option>
                                                    <option value="Deficiente">3 - Deficiente</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr class="text-center">
                                            <td class="align-middle text-left">Presenta relación con la pregunta
                                                problema
                                            </td>
                                            <td colspan="3">
                                                <select name="opt_one_two" id="opt_one_two" class="login-form__input"
                                                    required>
                                                    <option value="">Seleccionar</option>
                                                    <option value="Excelente">1 - Excelente</option>
                                                    <option value="Aceptable">2 - Aceptable</option>
                                                    <option value="Deficiente">3 - Deficiente</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <!-- SECCIÓN INTRODUCCIÓN -->
                                        <tr class="text-center">
                                            <td class="t-title">2. INRODUCCIÓN</td>
                                            <td colspan="3" class="bg-light"></td>
                                        </tr>
                                        <tr class="text-center">
                                            <td class="align-middle text-left">Ofrece un preámbulo de la investigación a
                                                realizar</td>
                                            <td colspan="3">
                                                <select name="opt_two_one" id="opt_two_one" class="login-form__input"
                                                    required>
                                                    <option value="">Seleccionar</option>
                                                    <option value="Excelente">1 - Excelente</option>
                                                    <option value="Aceptable">2 - Aceptable</option>
                                                    <option value="Deficiente">3 - Deficiente</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr class="text-center">
                                            <td class="align-middle text-left">Explica en términos generales el
                                                contenido
                                                del proyecto</td>
                                            <td colspan="3">
                                                <select name="opt_two_two" id="opt_two_two" class="login-form__input"
                                                    required>
                                                    <option value="">Seleccionar</option>
                                                    <option value="Excelente">1 - Excelente</option>
                                                    <option value="Aceptable">2 - Aceptable</option>
                                                    <option value="Deficiente">3 - Deficiente</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <!-- SECCIÓN  JUSTIFICACIÓN-->
                                        <tr class="text-center">
                                            <td class="t-title">3. JUSTIFICACIÓN</td>
                                            <td colspan="3" class="bg-light"></td>
                                        </tr>
                                        <tr class="text-center">
                                            <td class="align-middle text-left">Señala el por qué, la importancia y los
                                                beneficios de hacer la investigación</td>
                                            <td colspan="3">
                                                <select name="opt_three_one" id="opt_three_one"
                                                    class="login-form__input" required>
                                                    <option value="">Seleccionar</option>
                                                    <option value="Excelente">1 - Excelente</option>
                                                    <option value="Aceptable">2 - Aceptable</option>
                                                    <option value="Deficiente">3 - Deficiente</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr class="text-center">
                                            <td class="align-middle text-left">Argumenta la viabilidad del proyecto
                                                desde lo
                                                académico y la utilidad para la organización y/o beneficiarios</td>
                                            <td colspan="3">
                                                <select name="opt_three_two" id="opt_three_two"
                                                    class="login-form__input" required>
                                                    <option value="">Seleccionar</option>
                                                    <option value="Excelente">1 - Excelente</option>
                                                    <option value="Aceptable">2 - Aceptable</option>
                                                    <option value="Deficiente">3 - Deficiente</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <!-- SECCIÓN DESSCRIPCIÓN Y PLANTEAMIENTO DEL PROBLEMA -->
                                        <tr class="text-center">
                                            <td class="t-title">4. DESSCRIPCIÓN Y PLANTEAMIENTO DEL PROBLEMA</td>
                                            <td colspan="3" class="bg-light"></td>
                                        </tr>
                                        <tr class="text-center">
                                            <td class="align-middle text-left">Describe e identifica claramente en qué
                                                consiste el problema</td>
                                            <td colspan="3">
                                                <select name="opt_four_one" id="opt_four_one" class="login-form__input"
                                                    required>
                                                    <option value="">Seleccionar</option>
                                                    <option value="Excelente">1 - Excelente</option>
                                                    <option value="Aceptable">2 - Aceptable</option>
                                                    <option value="Deficiente">3 - Deficiente</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr class="text-center">
                                            <td class="align-middle text-left">Se presentan las causas que lo generan y
                                                muestra posibles soluciones</td>
                                            <td colspan="3">
                                                <select name="opt_four_two" id="opt_four_two" class="login-form__input"
                                                    required>
                                                    <option value="">Seleccionar</option>
                                                    <option value="Excelente">1 - Excelente</option>
                                                    <option value="Aceptable">2 - Aceptable</option>
                                                    <option value="Deficiente">3 - Deficiente</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <!-- SECCIÓN  OBJETIVOS-->
                                        <tr class="text-center">
                                            <td class="t-title">5. OBJETIVOS</td>
                                            <td colspan="3" class="bg-light"></td>
                                        </tr>
                                        <tr class="text-center">
                                            <td class="align-middle text-left">El objetivo general indica en forma clara
                                                y
                                                precisa qué se va a hacer y qué se va a hacer siendo coherente con el
                                                problema planteado y el título del proyecto</td>
                                            <td colspan="3">
                                                <select name="opt_five_one" id="opt_five_one" class="login-form__input"
                                                    required>
                                                    <option value="">Seleccionar</option>
                                                    <option value="Excelente">1 - Excelente</option>
                                                    <option value="Aceptable">2 - Aceptable</option>
                                                    <option value="Deficiente">3 - Deficiente</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr class="text-center">
                                            <td class="align-middle text-left">Los objetivos son medibles y permiten
                                                identificar si se han cumplido o no</td>
                                            <td colspan="3">
                                                <select name="opt_five_two" id="opt_five_two" class="login-form__input"
                                                    required>
                                                    <option value="">Seleccionar</option>
                                                    <option value="Excelente">1 - Excelente</option>
                                                    <option value="Aceptable">2 - Aceptable</option>
                                                    <option value="Deficiente">3 - Deficiente</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <!-- SECCIÓN MARCO REFERENCIAL -->
                                        <tr class="text-center">
                                            <td class="t-title">6. MARCO REFERENCIAL</td>
                                            <td colspan="3" class="bg-light"></td>
                                        </tr>
                                        <tr class="text-center">
                                            <td class="align-middle text-left">Se evidencian los antecedentes previos a
                                                la
                                                investigación</td>
                                            <td colspan="3">
                                                <select name="opt_six_one" id="opt_six_one" class="login-form__input"
                                                    required>
                                                    <option value="">Seleccionar</option>
                                                    <option value="Excelente">1 - Excelente</option>
                                                    <option value="Aceptable">2 - Aceptable</option>
                                                    <option value="Deficiente">3 - Deficiente</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr class="text-center">
                                            <td class="align-middle text-left">Muestra teorías esenciales para
                                                comprender el
                                                problema</td>
                                            <td colspan="3">
                                                <select name="opt_six_two" id="opt_six_two" class="login-form__input"
                                                    required>
                                                    <option value="">Seleccionar</option>
                                                    <option value="Excelente">1 - Excelente</option>
                                                    <option value="Aceptable">2 - Aceptable</option>
                                                    <option value="Deficiente">3 - Deficiente</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <!-- SECCIÓN DISEÑO METODOLÓGICO -->
                                        <tr class="text-center">
                                            <td class="t-title">7. DISEÑO METODOLÓGICO</td>
                                            <td colspan="3" class="bg-light"></td>
                                        </tr>
                                        <tr class="text-center">
                                            <td class="align-middle text-left">Se muestra en forma organizada y precisa,
                                                cómo será alcanzando cada uno de los objetivos</td>
                                            <td colspan="3">
                                                <select name="opt_seven_one" id="opt_seven_one"
                                                    class="login-form__input" required>
                                                    <option value="">Seleccionar</option>
                                                    <option value="Excelente">1 - Excelente</option>
                                                    <option value="Aceptable">2 - Aceptable</option>
                                                    <option value="Deficiente">3 - Deficiente</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr class="text-center">
                                            <td class="align-middle text-left">Refleja la estructura lógica que se
                                                realizará
                                                para dar solución al problema planteado</td>
                                            <td colspan="3">
                                                <select name="opt_seven_two" id="opt_seven_two"
                                                    class="login-form__input" required>
                                                    <option value="">Seleccionar</option>
                                                    <option value="Excelente">1 - Excelente</option>
                                                    <option value="Aceptable">2 - Aceptable</option>
                                                    <option value="Deficiente">3 - Deficiente</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <!-- SECCIÓN  RESULTADOS/PRODUCTOS ESPERADOS Y POTENCIALES-->
                                        <tr class="text-center">
                                            <td class="t-title">8. RESULTADOS/PRODUCTOS ESPERADOS Y POTENCIALES</td>
                                            <td colspan="3" class="bg-light"></td>
                                        </tr>
                                        <tr class="text-center">
                                            <td class="align-middle text-left">Son coherentes con los objetivos
                                                planteados
                                            </td>
                                            <td colspan="3">
                                                <select name="opt_eigth_one" id="opt_eigth_one"
                                                    class="login-form__input" required>
                                                    <option value="">Seleccionar</option>
                                                    <option value="Excelente">1 - Excelente</option>
                                                    <option value="Aceptable">2 - Aceptable</option>
                                                    <option value="Deficiente">3 - Deficiente</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr class="text-center">
                                            <td class="align-middle text-left">El indicador es un referente que permite
                                                identificar el logro del resultado</td>
                                            <td colspan="3">
                                                <select name="opt_eigth_two" id="opt_eigth_two"
                                                    class="login-form__input" required>
                                                    <option value="">Seleccionar</option>
                                                    <option value="Excelente">1 - Excelente</option>
                                                    <option value="Aceptable">2 - Aceptable</option>
                                                    <option value="Deficiente">3 - Deficiente</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <!-- SECCIÓN CONCLUSIÓN -->
                                        <tr class="text-center">
                                            <td class="t-title">9. CONCLUSIÓN</td>
                                            <td colspan="3" class="bg-light"></td>
                                        </tr>
                                        <tr class="text-center">
                                            <td class="align-middle text-left">Resalta los aspectos más revelantes de la
                                                investigación</td>
                                            <td colspan="3">
                                                <select name="opt_nine_one" id="opt_nine_one" class="login-form__input"
                                                    required>
                                                    <option value="">Seleccionar</option>
                                                    <option value="Excelente">1 - Excelente</option>
                                                    <option value="Aceptable">2 - Aceptable</option>
                                                    <option value="Deficiente">3 - Deficiente</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr class="text-center">
                                            <td class="align-middle text-left">Es coherente con los objetivos del
                                                proyecto y
                                                presentan resultados obtenidos para el cumplimiento de los mismos</td>
                                            <td colspan="3">
                                                <select name="opt_nine_two" id="opt_nine_two" class="login-form__input"
                                                    required>
                                                    <option value="">Seleccionar</option>
                                                    <option value="Excelente">1 - Excelente</option>
                                                    <option value="Aceptable">2 - Aceptable</option>
                                                    <option value="Deficiente">3 - Deficiente</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <!-- SECCIÓN  BIBLIOGRAFÍA-->
                                        <tr class="text-center">
                                            <td class="t-title">10. BIBLIOGRAFÍA</td>
                                            <td colspan="3" class="bg-light"></td>
                                        </tr>
                                        <tr class="text-center">
                                            <td class="align-middle text-left">Corresponde al lisado referencias
                                                bibliografícas que utilizaron como soporte en la investigación</td>
                                            <td colspan="3">
                                                <select name="opt_ten_one" id="opt_ten_one" class="login-form__input"
                                                    required>
                                                    <option value="">Seleccionar</option>
                                                    <option value="Excelente">1 - Excelente</option>
                                                    <option value="Aceptable">2 - Aceptable</option>
                                                    <option value="Deficiente">3 - Deficiente</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr class="text-center">
                                            <td class="align-middle text-left">El proyecto es respetuoso con los
                                                derechos de
                                                propiedad intelectual, es decir, no se persibe plagio</td>
                                            <td colspan="3">
                                                <select name="opt_ten_two" id="opt_ten_two" class="login-form__input"
                                                    required>
                                                    <option value="">Seleccionar</option>
                                                    <option value="Excelente">1 - Excelente</option>
                                                    <option value="Aceptable">2 - Aceptable</option>
                                                    <option value="Deficiente">3 - Deficiente</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <!-- SECCIÓN PRESENTACIÓN Y DOMINIO-->
                                        <tr class="text-center">
                                            <td class="t-title">11. PRESENTACIÓN Y DOMINIO</td>
                                            <td colspan="3" class="bg-light"></td>
                                        </tr>
                                        <tr class="text-center">
                                            <td class="align-middle text-left">El ponente tiene buena expresión oral y
                                                mantiene la atención del público</td>
                                            <td colspan="3">
                                                <select name="opt_elev_one" id="opt_elev_one" class="login-form__input"
                                                    required>
                                                    <option value="">Seleccionar</option>
                                                    <option value="Excelente">1 - Excelente</option>
                                                    <option value="Aceptable">2 - Aceptable</option>
                                                    <option value="Deficiente">3 - Deficiente</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr class="text-center">
                                            <td class="align-middle text-left">El ponente muestra seguridad y
                                                conocimiento
                                                sobre el tema que trabaja</td>
                                            <td colspan="3">
                                                <select name="opt_elev_two" id="opt_elev_two" class="login-form__input"
                                                    required>
                                                    <option value="">Seleccionar</option>
                                                    <option value="Excelente">1 - Excelente</option>
                                                    <option value="Aceptable">2 - Aceptable</option>
                                                    <option value="Deficiente">3 - Deficiente</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <!-- SECCIÓN SUBTOTALES Y TOTALES-->
                                        <tr class="text-center">
                                            <td class="t-title">subtotales</td>
                                            <td><input type="hidden" name="subt1" value="" class="input_subt1"> <span
                                                    class="s1"></span> </td>
                                            <td><input type="hidden" name="subt2" value="" class="input_subt2"><span
                                                    class="s2"></span></td>
                                            <td><input type="hidden" name="subt3" value="" class="input_subt3"><span
                                                    class="s3"></span></td>
                                        </tr>

                                        <tr class="text-center">
                                            <td class="t-title">total</td>
                                            <td colspan="3" class="bg-light"><input type="hidden" name="total" value=""
                                                    class="input_total"><span class="total"></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div class="col-12">
                            <label class="login-form__label text-center" for="">OBSERVACIONES, COMENTARIOS Y/O
                                RECOMENDACIONES</label>
                            <textarea name="comentarios" id="" cols="30" rows="10" class="login-form__input"></textarea>
                        </div>
                    </div>

                    <button class="login-form__submit btn-guardar" type="submit">
                        Guardar información
                    </button>
                    <button class="login-form__submit btn-cerrar-session" type="button">
                        Cerrar sesíon
                    </button>
                    <br>
                </form>
            </div>

        </div>
    </div>
    <a id="subir" href="#login"><img src="assets/img/subir.png" alt="sub"></a>
    <script src="js/query-3.4.1.min.js"></script>
    <script src="js/main-rubrica.js"></script>

</html>