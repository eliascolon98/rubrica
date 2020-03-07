document.getElementById("menu-sw").addEventListener("click", toggleSidebarMenu);
document.getElementById("colombiamar-notification-sw").addEventListener("click", toggleNotification);
document.getElementById("colombiamar-user-sw").addEventListener("click", toggleUserMenu);

function toggleSidebarMenu() {
  var bodyElement = document.getElementsByTagName("BODY")[0];

  if (bodyElement.classList.contains("body--sidebar-open")) {
    bodyElement.classList.remove("body--sidebar-open");
  } else {
    bodyElement.classList.add("body--sidebar-open");
  }
}

function toggleNotification() { 
  var notifications = document.getElementById("colombiamar-notification");
  var user = document.getElementById("colombiamar-user");
  user.classList.add("hide");
  
  if (notifications.classList.contains("hide")) {
    notifications.classList.remove("hide");
  } else {
    notifications.classList.add("hide");
  }
}

function toggleUserMenu() { 
  var user = document.getElementById("colombiamar-user");
  var notifications = document.getElementById("colombiamar-notification");
  notifications.classList.add("hide");

  if (user.classList.contains("hide")) {
    user.classList.remove("hide");
  } else {
    user.classList.add("hide");
  }
}

function fadeTransition(nww, oldw){
  var newWindow = document.getElementById(nww);
  var oldWindow = document.getElementById(oldw);

  oldWindow.classList.add("fade-hide-animation");
  setTimeout(function(){
    oldWindow.classList.add("hide");
    newWindow.classList.remove("hide");
    newWindow.classList.remove("fade-hide-animation");
  }, 400);
}





