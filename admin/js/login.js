document
  .getElementById("eye-password-sw")
  .addEventListener("click", toggleShowingPassword);
document
  .getElementById("to-forgot-sw")
  .addEventListener("click", toggleLoginForgot);
document
  .getElementById("to-login-sw")
  .addEventListener("click", toggleLoginForgot);


function toggleShowingPassword() {
  var eye_btn = document.getElementById("pass-eye-icon").classList;
  if (eye_btn.contains("fa-eye")) {
    document.getElementById("user-pass").setAttribute("type", "text");

    eye_btn.remove("fa-eye");
    eye_btn.add("fa-eye-slash");
  } else {
    document.getElementById("user-pass").setAttribute("type", "password");

    eye_btn.add("fa-eye");
    eye_btn.remove("fa-eye-slash");
  }
}

function toggleLoginForgot() {
  var login = document.getElementById("login").classList;

  if (login.contains("forgot")) {
    login.remove("forgot");
  } else {
    login.add("forgot");
  }
}

/*validar información del usuario al loguear */
var fullUrl = window.location.href;
var urlComponents = fullUrl.split("#");
var data = urlComponents[urlComponents.length - 1];

if (data == "validation") {
  alert("Por favor verifique su información.");
  location.href = "index.html";
} else if (data == "notFound") {
  alert("Este usuario no existe.");
  location.href = "index.html";
}
