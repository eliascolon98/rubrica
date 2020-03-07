var rs_error_message = "";
function setValidationErrorMsg(msg){
  rs_error_message = msg;
}
function getValidationErrorMsg(){
  return rs_error_message;
}

function validateDate(aDate, label) {
  var pattern = new RegExp(
    /(\b(0?[1-9]|[12]\d|30|31)[^\w\d\r\n:](0?[1-9]|1[0-2])[^\w\d\r\n:](\d{4}|\d{2})\b)|(\b(0?[1-9]|1[0-2])[^\w\d\r\n:](0?[1-9]|[12]\d|30|31)[^\w\d\r\n:](\d{4}|\d{2})\b)|(\b(\d{4}|\d{2})\b[^\w\d\r\n:](0?[1-9]|1[0-2])[^\w\d\r\n:](0?[1-9]|[12]\d|30|31))/
    );

    if (pattern.test(aDate)) {
    return true;
  } else {
    setValidationErrorMsg("El campo " + label + " no es válido.");
    return false;
  }
}

function validateTime(aTime, label) {
  var pattern = new RegExp(/^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9](:[0-5][0-9])?$/m);
  
  if (pattern.test(aTime)) {
    return true;
  } else {
    setValidationErrorMsg("El campo " + label + " no es válido.");
    return false;
  }
}

function validateDateTime(aDateTime, label) {
  var initDateTimeComponents = aDateTime.split(" ");
  if (validateDate(initDateTimeComponents[0]) && validateTime(initDateTimeComponents[1])) {
    return true;
  } else {
    setValidationErrorMsg("El campo " + label + " no es válido.");
    return false;
  }
}

function validateNames(aName, label, required=false, minSize=2, maxZise=50) {
  var aNameTrimed = aName.trim();
  if(required && aNameTrimed.length == 0){
    setValidationErrorMsg("El " + label + " es un campo obligatorio.");
    return false;
  }else if( aNameTrimed.length > 0 && aNameTrimed.length < minSize ){
    setValidationErrorMsg("El " + label + " es demasiado corto. Debe tener al menos " + minSize + "caracteres.");
      return false;
  }else if( aNameTrimed.length > 0 && aNameTrimed.length > maxZise ){
    setValidationErrorMsg("El " + label + " es demasiado largo.");
    return false;
  }else if( aNameTrimed.length > 0 ){
    var pattern =new RegExp(/([a-z]|[A-Z]|[áéíóúÁÉÍÓÚÑñ]|[. ])+$/);
    if(pattern.test(aNameTrimed)){
      return true;
    }else{
      setValidationErrorMsg("La estructura del " + label + " no es aceptable para el sistema, evita usar caracteres especiales.");
      return false;
    }
  }else{
    return true;
  }

}
function validatePassword(aPass, required=false, minSize=8, maxZise=50) {
  var passTrimed = aPass.trim();
  if(required && passTrimed.length == 0){
    setValidationErrorMsg("la Contraseña es un campo obligatorio.");
    return false;
  }else if( passTrimed.length > 0 && passTrimed.length < minSize ){
    setValidationErrorMsg("La contraseña es demasiado corto. Debe tener al menos " + minSize + "caracteres.");
      return false;
  }else if( passTrimed.length > 0 && passTrimed.length > maxZise ){
    setValidationErrorMsg("La contraseña es demasiado largo.");
    return false;
  }else if( passTrimed.length > 0 ){
    var pattern =new RegExp(/([a-z]|[A-Z]|[. !"#$%&'()*+,-.\/:;<=>?@\[\\\]^_{|}~]|[0-9])+$/);
    if(pattern.test(passTrimed)){
      return true;
    }else{
      setValidationErrorMsg("La contraseña no es aceptable, contiene caracteres nó válidos.");
      return false;
    }
  }else{
    return true;
  }

}
function validateEmail(email) {
  var pattern =new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  if (pattern.test(String(email).toLowerCase())) {
    return true;
  } else {
    setValidationErrorMsg("El correo electrónico  no es válido.");
    return false;
  }
}
function validatePhone(phone) {
  var pattern =new RegExp(/^([0-9]{3}[-. ]?)?([0-9]{3})[-. ]?([0-9]{4})$/m);
  
  if (pattern.test(phone)) {
    return true;
  } else {
    setValidationErrorMsg("El Número de teléfono no es válido.");
    return false;
  }
}

function validateFreeField(aString, label, required=false, minSize=2, maxZise=50){
  var aStringTrimed = aString.trim();
  if(required && aStringTrimed.length == 0){
    setValidationErrorMsg("El campo " + label + " es obligatorio.");
    return false;
  }else{
    if( aStringTrimed.length > 0 && aStringTrimed.length < minSize ){
      setValidationErrorMsg("El campo " + label + " es demasiado corto. Debe tener al menos " + minSize + " caracteres.");
        return false;
    }else if( aStringTrimed.length > 0 && aStringTrimed.length > maxZise ){
      setValidationErrorMsg("El campo " + label + " es demasiado largo.");
      return false;
    }
  }
  
  return true;
}