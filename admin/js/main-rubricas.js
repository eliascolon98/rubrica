$(document).ready(function () {
  $(".btn-cerrar-session").click(function(){
    location.href= "salir.php";
  });

  $('#subir').click(function () {
    $('body, html').animate({
      scrollTop: '0px'
    }, 300);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('#subir').slideDown(400);
    } else {
      $('#subir').slideUp(400);
    }
  });


  $("select[name=opt_one_one]").change(function () {
    load();
  });
  $("select[name=opt_one_two]").change(function () {
    load();
  });
  $("select[name=opt_two_one]").change(function () {
    load();
  });
  $("select[name=opt_two_two]").change(function () {
    load();
  });
  $("select[name=opt_three_one]").change(function () {
    load();
  });
  $("select[name=opt_three_two]").change(function () {
    load();
  });
  $("select[name=opt_four_one]").change(function () {
    load();
  });
  $("select[name=opt_four_two]").change(function () {
    load();
  });
  $("select[name=opt_five_one]").change(function () {
    load();
  });
  $("select[name=opt_five_two]").change(function () {
    load();
  });
  $("select[name=opt_six_one]").change(function () {
    load();
  });
  $("select[name=opt_six_two]").change(function () {
    load();
  });
  $("select[name=opt_seven_one]").change(function () {
    load();
  });
  $("select[name=opt_seven_two]").change(function () {
    load();
  });
  $("select[name=opt_eigth_one]").change(function () {
    load();
  });
  $("select[name=opt_eigth_two]").change(function () {
    load();
  });
  $("select[name=opt_nine_one]").change(function () {
    load();
  });
  $("select[name=opt_nine_two]").change(function () {
    load();
  });
  $("select[name=opt_ten_one]").change(function () {
    load();
  });
  $("select[name=opt_ten_two]").change(function () {
    load();
  });
  $("select[name=opt_elev_one]").change(function () {
    load();
  });
  $("select[name=opt_elev_two]").change(function () {
    load();
  });


  function load() {
    var opt_one_one = $('select[name="opt_one_one"] option:selected').text();
    var opt_one_two = $('select[name="opt_one_two"] option:selected').text();
    var opt_two_one = $('select[name="opt_two_one"] option:selected').text();
    var opt_two_two = $('select[name="opt_two_two"] option:selected').text();
    var opt_three_one = $('select[name="opt_three_one"] option:selected').text();
    var opt_three_two = $('select[name="opt_three_two"] option:selected').text();
    var opt_four_one = $('select[name="opt_four_one"] option:selected').text();
    var opt_four_two = $('select[name="opt_four_two"] option:selected').text();
    var opt_five_one = $('select[name="opt_five_one"] option:selected').text();
    var opt_five_two = $('select[name="opt_five_two"] option:selected').text();
    var opt_six_one = $('select[name="opt_six_one"] option:selected').text();
    var opt_six_two = $('select[name="opt_six_two"] option:selected').text();
    var opt_seven_one = $('select[name="opt_seven_one"] option:selected').text();
    var opt_seven_two = $('select[name="opt_seven_two"] option:selected').text();
    var opt_eigth_one = $('select[name="opt_eigth_one"] option:selected').text();
    var opt_eigth_two = $('select[name="opt_eigth_two"] option:selected').text();
    var opt_nine_one = $('select[name="opt_nine_one"] option:selected').text();
    var opt_nine_two = $('select[name="opt_nine_two"] option:selected').text();
    var opt_ten_one = $('select[name="opt_ten_one"] option:selected').text();
    var opt_ten_two = $('select[name="opt_ten_two"] option:selected').text();
    var opt_elev_one = $('select[name="opt_elev_one"] option:selected').text();
    var opt_elev_two = $('select[name="opt_elev_two"] option:selected').text();
    var datos = opt_one_one + opt_one_two + opt_two_one + opt_two_two +
      opt_three_one + opt_three_two + opt_four_one + opt_four_two + opt_five_one +
      opt_five_two + opt_six_one + opt_six_two + opt_seven_one + opt_seven_two + opt_eigth_one +
      opt_eigth_two + opt_nine_one + opt_nine_two + opt_ten_one + opt_ten_two + opt_elev_one +
      opt_elev_two;



    var indice_one = [];
    var indice_two = [];
    var indice_three = [];
    for (var i = 0; i < datos.length; i++) {
      if (datos[i].toLowerCase() === "1") indice_one.push(i);
    }
    for (var j = 0; j < datos.length; j++) {
      if (datos[j].toLowerCase() === "2") indice_two.push(j);
    }
    for (var k = 0; k < datos.length; k++) {
      if (datos[k].toLowerCase() === "3") indice_three.push(k);
    }
    var subt1 = indice_one.length;
    var subt2 = indice_two.length * 2;
    var subt3 = indice_three.length * 3;

    var total = (subt1 + subt2 + subt3);
    $(".s1").text(subt1);
    $(".s2").text(subt2);
    $(".s3").text(subt3);
    $(".total").text(total);
    $(".input_subt1").val(subt1);
    $(".input_subt2").val(subt2);
    $(".input_subt3").val(subt3);
    $(".input_total").val(total);
    
  }
  


  var fullUrl = window.location.href;
  var urlComponents = fullUrl.split("#");
  var data = urlComponents[urlComponents.length - 1];

  if (data == "success") {
    alert("Proyecto almacenado en la Base de datos correctamente");
    location.href = "index.php";
  }else if (data == "error") {
    alert("Error al guardar información");
    location.href = "index.php";
  }else if (data == "exist") {
    alert("Este proyecto ya existe, por favor escriba otro nombre");
    location.href = "index.php";
  }
  



})