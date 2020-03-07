var serviceDetailContainer = new Array();

    document
      .getElementById("detail-1")
      .addEventListener("click", showDetails);
    document
      .getElementById("close-details")
      .addEventListener("click", closeDetails);

    document
      .getElementById("new-request")
      .addEventListener("click", addServiceRequest);
    document
      .getElementById("close-new-request")
      .addEventListener("click", closeServiceRequest);
    document
      .getElementById("save-request")
      .addEventListener("click", saveServiceRequest);

    document
      .getElementById("add-detalle-solicitud")
      .addEventListener("click", showAddServiceRequestDetail);
    document
      .getElementById("close-add-request-detail")
      .addEventListener("click", closeAddServiceRequestDetail);
    document
      .getElementById("add-request-detail")
      .addEventListener("click", hotPersistServiceRequestDetail);

    document
      .getElementById("init-date")
      .addEventListener("focusout", UpdateHoursInOperation);
    document
      .getElementById("init-time")
      .addEventListener("focusout", UpdateHoursInOperation);
    document
      .getElementById("final-date")
      .addEventListener("focusout", UpdateHoursInOperation);
    document
      .getElementById("final-time")
      .addEventListener("focusout", UpdateHoursInOperation);



    function showDetails() {
      fadeTransition("detalle-solicitud", "solicitudes");
    }

    function closeDetails() {
      fadeTransition("solicitudes", "detalle-solicitud");
    }

    function addServiceRequest() {
      fadeTransition("nueva-solicitud", "solicitudes");
    }

    function closeServiceRequest() {
      fadeTransition("solicitudes", "nueva-solicitud");
    }

    function showAddServiceRequestDetail() {
      document.getElementById("nuevo-detalle-solicitud-titulo").innerHTML = "Agregar requerimiento de operadores";
      cleanServiceRequestDetailItemForm();
      document.getElementById("nuevo-detalle-solicitud").classList.remove("hide");
    }

    function closeAddServiceRequestDetail() {
      document.getElementById("nuevo-detalle-solicitud").classList.add("hide");
    }

    function saveServiceRequest() {
      console.log(serviceDetailContainer);
      fadeTransition("solicitudes", "nueva-solicitud");
    }


    function hotPersistServiceRequestDetail() {
      if(!validateServiceRequestDetailForm()){
        var element = document.getElementById("rs-modal__card-body");

        element.scrollTop = element.scrollHeight - element.clientHeight;
        return false;
      }

      var serviceDetailItem = new Array();

      var dateInicio = document.getElementById("init-date").value;
      var timeInicio = document.getElementById("init-time").value;
      var dateFin = document.getElementById("final-date").value;
      var timeFin = document.getElementById("final-time").value;
      var horasOperacion = document.getElementById("service-hours").value;
      var servicio = document.getElementById("service-id").options[document.getElementById("service-id").selectedIndex]
        .value;
      var servicio_label = document.getElementById("service-id").options[document.getElementById("service-id")
        .selectedIndex].innerHTML;
      var proveedor = document.getElementById("supplier").options[document.getElementById("supplier").selectedIndex]
        .value;
      var proveedor_label = document.getElementById("supplier").options[document.getElementById("supplier")
        .selectedIndex].innerHTML;
      var cantidadOperadores = document.getElementById("operator-count").value;
      var comentarios = document.getElementById("comments").value;

      serviceDetailItem["INIT-DATE"] = dateInicio;
      serviceDetailItem["INIT-TIME"] = timeInicio;
      serviceDetailItem["FINISH-DATE"] = dateFin;
      serviceDetailItem["FINISH-TIME"] = timeFin;
      serviceDetailItem["SERVICE-HOURS"] = horasOperacion;
      serviceDetailItem["SERVICE"] = servicio;
      serviceDetailItem["SERVICE-LBL"] = servicio_label;
      serviceDetailItem["SUPPLIER"] = proveedor;
      serviceDetailItem["SUPPLIER-LBL"] = proveedor_label;
      serviceDetailItem["OPERATOR-COUNT"] = cantidadOperadores;
      serviceDetailItem["COMMENTS"] = comentarios;
      serviceDetailItem["IDX"] = serviceDetailContainer.length;

      var index = document.getElementById("service-req-detail-index-for-update").value;

      if(index < 0){
        injectServiceRequestDetailItem(serviceDetailItem, serviceDetailContainer.length);
        serviceDetailContainer.push(serviceDetailItem);
      }else{
        updateServiceRequestDetail(serviceDetailItem, index);
        serviceDetailContainer[index] = serviceDetailItem;
      }
      
    }

    function injectServiceRequestDetailItem(data, index) {
      var container = document.getElementById("service-request-detail-item-list");

      var tr = document.createElement("tr");
      tr.setAttribute("id", "RDI-" + index);

      var datetimei = document.createElement("td");
      datetimei.innerHTML = formatDate(data["INIT-DATE"], "-", true) + " " + timeConvert24To12(data["INIT-TIME"]);

      var datetimef = document.createElement("td");
      datetimef.innerHTML = formatDate(data["FINISH-DATE"], "-", true) + " " + timeConvert24To12(data["FINISH-TIME"]);

      var hours = document.createElement("td");
      hours.innerHTML = data["SERVICE-HOURS"];

      var service = document.createElement("td");
      service.innerHTML = data["SERVICE-LBL"];

      var supplier = document.createElement("td");
      supplier.innerHTML = data["SUPPLIER-LBL"];

      var ocount = document.createElement("td");
      ocount.innerHTML = data["OPERATOR-COUNT"];

      var comm_span = document.createElement("span");
      comm_span.setAttribute("class", "rs-tooltip");
      comm_span.setAttribute("rs-tooltip", data["COMMENTS"]);
      var comm_i = document.createElement("i");
      comm_i.setAttribute("class", "fas fa-comment-dots");
      comm_span.appendChild(comm_i);

      var edit_span = document.createElement("span");
      var edit_i = document.createElement("i");
      edit_i.setAttribute("class", "fas fa-pencil-alt");
      edit_span.appendChild(edit_i);
      edit_span.addEventListener("click", function () {
        editServiceRequestDetailItem(index);
      });

      var delete_span = document.createElement("span");
      var delete_i = document.createElement("i");
      delete_i.setAttribute("class", "fas fa-trash-alt");
      delete_span.appendChild(delete_i);
      delete_span.addEventListener("click", function () {
        deleteServiceRequestDetailItem(index);
      });

      var icons = document.createElement("td");
      icons.appendChild(comm_span);
      icons.appendChild(edit_span);
      icons.appendChild(delete_span);

      tr.appendChild(datetimei);
      tr.appendChild(datetimef);
      tr.appendChild(hours);
      tr.appendChild(service);
      tr.appendChild(supplier);
      tr.appendChild(ocount);
      tr.appendChild(icons);

      container.appendChild(tr);

      closeAddServiceRequestDetail();
      cleanServiceRequestDetailItemForm();
    }

    function editServiceRequestDetailItem(index){
      cleanServiceRequestDetailItemForm();

      document.getElementById("service-req-detail-index-for-update").value = index;
      document.getElementById("nuevo-detalle-solicitud-titulo").innerHTML = "Modificar requerimiento de operadores";

      var item = serviceDetailContainer[index];
      document.getElementById("init-date").value = item["INIT-DATE"];
      document.getElementById("init-time").value = item["INIT-TIME"];
      document.getElementById("final-date").value = item["FINISH-DATE"];
      document.getElementById("final-time").value = item["FINISH-TIME"];
      document.getElementById("service-hours").value = item["SERVICE-HOURS"];

      
      var services = document.getElementById("service-id");
      for(var s=0; s < services.options.length; s++){
        if(services.options[s].value == item["SERVICE"]){
          services.selectedIndex = s;
          break;
        }
      }

      var suppliers = document.getElementById("supplier");
      for(var s=0; s < suppliers.options.length; s++){
        if(suppliers.options[s].value == item["SUPPLIER"]){
          suppliers.selectedIndex = s;
          break;
        }
      }

      document.getElementById("operator-count").value = item["OPERATOR-COUNT"];
      document.getElementById("comments").value = item["COMMENTS"];

      document.getElementById("nuevo-detalle-solicitud").classList.remove("hide");
    }

    function updateServiceRequestDetail(data, index) {
      var tr = document.getElementById("RDI-" + index);
   
      var tds = tr.childNodes;

      tds[0].innerHTML = formatDate(data["INIT-DATE"], "-", true) + " " + timeConvert24To12(data["INIT-TIME"]);

      tds[1].innerHTML = formatDate(data["FINISH-DATE"], "-", true) + " " + timeConvert24To12(data["FINISH-TIME"]);

      tds[2].innerHTML = data["SERVICE-HOURS"];

      tds[3].innerHTML = data["SERVICE-LBL"];

      tds[4].innerHTML = data["SUPPLIER-LBL"];

      tds[5].innerHTML = data["OPERATOR-COUNT"];

      tds[6].childNodes[0].setAttribute("rs-tooltip", data["COMMENTS"]);


      closeAddServiceRequestDetail();
      cleanServiceRequestDetailItemForm();
    }

    function cleanServiceRequestDetailItemForm(){
      document.getElementById("service-req-detail-index-for-update").value = -1;

      document.getElementById("init-date").value = "";
      document.getElementById("init-time").value = "";
      document.getElementById("final-date").value = "";
      document.getElementById("final-time").value = "";
      document.getElementById("service-hours").value = 0;

      document.getElementById("service-id").selectedIndex = 0;
      document.getElementById("supplier").selectedIndex = 0;

      document.getElementById("operator-count").value = 0;;
      document.getElementById("comments").value = "";
    }

    function deleteServiceRequestDetailItem(index) {
      var r = confirm("¿Estás a punto de eliminar un registro en la solicitud. Deseas continuar?");
      if (r == true) {
        var itemParent = document.getElementById("service-request-detail-item-list");
        var itemElement = document.getElementById("RDI-" + index);
        itemParent.removeChild(itemElement);

        for (var i = 0; i < serviceDetailContainer.length; i++) {
          if (index == serviceDetailContainer[i]["IDX"]) {
            serviceDetailContainer.splice(i, 1);
            break;
          }
        }
      }
    }

    function validateServiceRequestDetailForm(){
      var pass = true;
      var errors = "";

      var dateInicio = document.getElementById("init-date").value;
      if(!validateDate(dateInicio, "Fecha de inicio")){
        pass = false;
        errors+= '<i class="fas fa-exclamation-triangle"></i> ' + getValidationErrorMsg() + '&emsp;';
      }

      var timeInicio = document.getElementById("init-time").value;
      if(!validateTime(timeInicio, "Hora de inicio")){
        pass = false;
        errors+= '<i class="fas fa-exclamation-triangle"></i> ' + getValidationErrorMsg() + '&emsp;';
      }

      var dateFin = document.getElementById("final-date").value;
      if(!validateDate(dateFin, "Fecha de terminación")){
        pass = false;
        errors+= '<i class="fas fa-exclamation-triangle"></i> ' + getValidationErrorMsg() + '&emsp;';
      }

      var timeFin = document.getElementById("final-time").value;
      if(!validateTime(timeFin, "Hora de terminación")){
        pass = false;
        errors+= '<i class="fas fa-exclamation-triangle"></i> ' + getValidationErrorMsg() + '&emsp;';
      }

      var horasOperacion = document.getElementById("service-hours").value;
      if(horasOperacion < 1){
        pass = false;
        errors+= '<i class="fas fa-exclamation-triangle"></i> ' + 'El servicio a requerir debe tener al menos 1 hora de duración.' + '&emsp;';
      }

      var servicio = document.getElementById("service-id").options[document.getElementById("service-id").selectedIndex]
        .value;
      if(servicio == "NONE"){
        pass = false;
        errors+= '<i class="fas fa-exclamation-triangle"></i> ' + 'No ha seleccionado un servicio.' + '&emsp;';
      }
      
      var proveedor = document.getElementById("supplier").options[document.getElementById("supplier").selectedIndex]
        .value;
      if(proveedor == "NONE"){
          pass = false;
          errors+= '<i class="fas fa-exclamation-triangle"></i> ' + 'No ha seleccionado un proveedor.' + '&emsp;';
      }

      var cantidadOperadores = document.getElementById("operator-count").value;
      if(cantidadOperadores < 1){
        pass = false;
        errors+= '<i class="fas fa-exclamation-triangle"></i> ' + 'Debes requerir al menos un operador para el servicio.' + '&emsp;';
      }

      var comentarios = document.getElementById("comments").value;
      if(!validateFreeField(comentarios, "Observaciones", false, 2, 140)){
        pass = false;
        errors+= '<i class="fas fa-exclamation-triangle"></i> ' + getValidationErrorMsg() + '&emsp;';
      }

      
        document.getElementById("request-detai-errors").innerHTML = errors;

      return pass;
    }

    function UpdateHoursInOperation() {
      var dateInicio = document.getElementById("init-date").value;
      var timeInicio = document.getElementById("init-time").value;
      var dateFin = document.getElementById("final-date").value;
      var timeFin = document.getElementById("final-time").value;


      if (validateDate(dateInicio) && validateDate(dateFin) && validateTime(timeInicio) && validateTime(
          timeFin)) { //from rs-validator.js
        calculeHourOfServices(dateInicio + " " + timeInicio, dateFin + " " + timeFin);
      } else {
        document.getElementById("service-hours").value = 0;
      }
    }

    function calculeHourOfServices(initDatetime, endDateTime) {
      var initDateTimeComponents = initDatetime.split(" ");
      var initDateComponents = initDateTimeComponents[0].split("-");
      var initTimeComponents = initDateTimeComponents[1].split(":");

      var endDateTimeComponents = endDateTime.split(" ");
      var endDateComponents = endDateTimeComponents[0].split("-");
      var endTimeComponents = endDateTimeComponents[1].split(":");

      var startMark = new Date(initDateComponents[0], initDateComponents[1], initDateComponents[2], initTimeComponents[
        0], initTimeComponents[1]).getTime();
      var endMark = new Date(endDateComponents[0], endDateComponents[1], endDateComponents[2], endTimeComponents[0],
        endTimeComponents[1]).getTime();

      var diff = endMark - startMark;
      var elapsedHours = diff / 1000 / 60 / 60;

      document.getElementById("service-hours").value = Math.ceil(elapsedHours);
    }

   

    function timeConvert24To12(time24) {
      var ts = time24;
      var H = +ts.substr(0, 2);
      var h = (H % 12) || 12;
      h = (h < 10) ? ("0" + h) : h; // leading 0 at the left for 1 digit hours
      var ampm = H < 12 ? " AM" : " PM";
      ts = h + ts.substr(2, 3) + ampm;
      return ts;
    }

    function formatDate(aDate, token, reverse = false) {
      var dateC = aDate.split(token);

      var day = (reverse) ? dateC[2] : dateC[0];
      var month = "";
      switch (dateC[1]) {
        case "01":
          month = "Ene";
          break;
        case "02":
          month = "Feb";
          break;
        case "03":
          month = "Mar";
          break;
        case "04":
          month = "Abr";
          break;
        case "05":
          month = "May";
          break;
        case "06":
          month = "Jun";
          break;
        case "07":
          month = "Jul";
          break;
        case "08":
          month = "Ago";
          break;
        case "09":
          month = "Sep";
          break;
        case "10":
          month = "Oct";
          break;
        case "11":
          month = "Nov";
          break;
        case "12":
          month = "Dic";
          break;
      }

      var today = new Date();
      var currentYear = today.getFullYear();
      var paramYear = (reverse) ? dateC[0] : dateC[2];
      if (currentYear == paramYear) {
        return day + " " + month + ",";
      } else {
        return day + " " + month + ", " + paramYear;
      }

    }