const rs_months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const rs_weekdays = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

var rs_current_month = 1;
var rs_today_month = 1;
var rs_today = 1;
var rs_picked_day = 1;
var rs_calendar_data = null;

function getMonthLabel(month_index){
  return rs_months[month_index-1];
}

function getDayLabel(day_index){
  return rs_weekdays[day_index];
}

function getMonthSize(month){
  var date = new Date();
  if(month == 1 || month=="JAN"){
    return 31;
  }else if(month == 2 || month=="FEB"){
    return (is_leapYear(date.getFullYear())) ? 29 : 28;
  }else if(month == 3 || month=="MAR"){
    return 31;
  }else if(month == 4 || month=="APR"){
    return 30;
  }else if(month == 5 || month=="MAY"){
    return 31;
  }else if(month == 6 || month=="JUNE"){
    return 30;
  }else if(month == 7 || month=="JULY"){
    return 31;
  }else if(month == 8 || month=="AUG"){
    return 31;
  }else if(month == 9 || month=="SEPT"){
    return 30;
  }else if(month == 10 || month=="OCT"){
    return 31;
  }else if(month == 11 || month=="NOV"){
    return 30;
  }else if(month == 12 || month=="DEC"){
    return 31;
  }
}

function is_leapYear(year){
  return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
}

function drawCalendar(month = false){
  var date = new Date();
  rs_today = date.getDate();
  rs_today_month = Number(date.getMonth())+1;
  rs_picked_day = rs_today;

  if(month){
    date = new Date(date.getFullYear(), month);
  }
  rs_current_month = Number(date.getMonth())+1;

  var days_count = getMonthSize(rs_current_month);

  first_day_date = new Date(date.getFullYear(), date.getMonth(), 1);
  var first_day = first_day_date.getDay();

  if(!month){
    var widget = document.getElementById("rs-calendar-widget");

    var calendar = document.createElement("div");
    calendar.setAttribute("class", "calendar");
    calendar.setAttribute("id", "rs-calendar");
    widget.appendChild(calendar);

    drawCalendarControls();
    drawWeekDays();
  }

  drawCalendarBody(first_day, days_count);
  
  if(!month){
    var dates = document.createElement("div");
    dates.setAttribute("class", "dates");
    dates.setAttribute("id", "rs-dates");
    widget.appendChild(dates);
  }

  drawDatesContext();

  updateCalendarDataSource(generateTestCalendarData());
}

function drawCalendarControls(){
  var controls = document.createElement("div");
  controls.setAttribute("class", "calendar__controls");

  var prev_button = document.createElement("div");
  prev_button.setAttribute("class", "calendar__control-action");
  var i_left = document.createElement("i");
  i_left.setAttribute("class", "fas fa-caret-left");
  prev_button.appendChild(i_left);
  prev_button.addEventListener("click", goToPrevMonth);

  var month_label = document.createElement("div");
  month_label.setAttribute("class", "calendar__control-month");
  month_label.setAttribute("id", "rs-month-label");
  month_label.appendChild(document.createTextNode(getMonthLabel(rs_current_month)));

  var next_button = document.createElement("div");
  next_button.setAttribute("class", "calendar__control-action");
  var i_right = document.createElement("i");
  i_right.setAttribute("class", "fas fa-caret-right");
  next_button.appendChild(i_right);
  next_button.addEventListener("click", goToNextMonth);

  controls.appendChild(prev_button);
  controls.appendChild(month_label);
  controls.appendChild(next_button);

  document.getElementById("rs-calendar").appendChild(controls);
}

function setCalendarMonthLabel(month){
  document.getElementById("rs-month-label").innerHTML = getMonthLabel(month);
}

function drawWeekDays(){
  var calendarWeeks = document.createElement("div");
  calendarWeeks.setAttribute("class", "calendar__week-days");

  var day1 = document.createElement("div");
  day1.setAttribute("class", "calendar__week-day");
  day1.appendChild(document.createTextNode("Dom"));

  var day2 = document.createElement("div");
  day2.setAttribute("class", "calendar__week-day");
  day2.appendChild(document.createTextNode("Lun"));

  var day3 = document.createElement("div");
  day3.setAttribute("class", "calendar__week-day");
  day3.appendChild(document.createTextNode("Mar"));

  var day4 = document.createElement("div");
  day4.setAttribute("class", "calendar__week-day");
  day4.appendChild(document.createTextNode("Mie"));

  var day5 = document.createElement("div");
  day5.setAttribute("class", "calendar__week-day");
  day5.appendChild(document.createTextNode("Jue"));

  var day6 = document.createElement("div");
  day6.setAttribute("class", "calendar__week-day");
  day6.appendChild(document.createTextNode("Vie"));

  var day7 = document.createElement("div");
  day7.setAttribute("class", "calendar__week-day");
  day7.appendChild(document.createTextNode("Sab"));

  calendarWeeks.appendChild(day1);
  calendarWeeks.appendChild(day2);
  calendarWeeks.appendChild(day3);
  calendarWeeks.appendChild(day4);
  calendarWeeks.appendChild(day5);
  calendarWeeks.appendChild(day6);
  calendarWeeks.appendChild(day7);

  document.getElementById("rs-calendar").appendChild(calendarWeeks);  
}

function drawCalendarBody(firstDay, monthSize){
  var calendar_body = document.getElementById("rs-calendar__body");

  if(calendar_body == null){
    calendar_body = document.createElement("div");
    calendar_body.setAttribute("class", "calendar__body");
    calendar_body.setAttribute("id", "rs-calendar__body");
    document.getElementById("rs-calendar").appendChild(calendar_body);
  }
  
  calendar_body.innerHTML = "";

  if(rs_current_month == 2 && rs_picked_day >28 ){
    rs_picked_day = 28;
  }

  var dayControl = 1;
  var dayglobalControl = 1;
  firstDay++; 
  while(dayControl <= monthSize){
    var row = document.createElement("div");
    row.setAttribute("class", "calendar__row");

    for(var i = 1; i <= 7; i++){
      if(dayglobalControl < firstDay){ //passive day
        var preMonthSize = getMonthSize((rs_current_month-1 == 0) ? 12 : rs_current_month-1);
        var off_day = (preMonthSize-firstDay)+i+1;
        row.appendChild(drawOneDay("none", off_day, 0)); 
      }else if(dayglobalControl > (firstDay+monthSize-1)){//passive day
        var off_day = dayglobalControl-(firstDay+monthSize-1);
        row.appendChild(drawOneDay("none", off_day, 0));
      }else{//Normal days
        if(rs_picked_day == dayControl){//Normal active day
          row.appendChild(drawOneDay(dayControl, dayControl, 2));
        }else if(rs_today == dayControl && rs_current_month == rs_today_month){//Normal day
          row.appendChild(drawOneDay(dayControl, dayControl, 3));
        }else{//Normal day
          row.appendChild(drawOneDay(dayControl, dayControl, 1));
        }
        dayControl++;
      }
      dayglobalControl++;
    }
    calendar_body.appendChild(row);
  }
}
                  
function drawOneDay(cell_id, day_label, status){
  var day_class;
  if(status == 0){
    day_class = "calendar__day calendar__day--passive";
  }else if(status == 1){
    day_class = "calendar__day";
  }else if(status == 2){
    day_class = "calendar__day calendar__day--active";
  }else if(status == 3){
    day_class = "calendar__day calendar__day--today";
  }

  day_item = document.createElement("div");
  day_item.setAttribute("class", day_class);
  day_item.setAttribute("id", "ditem-"+ cell_id);
  if(day_class != "calendar__day calendar__day--passive"){
    day_item.addEventListener("click", function(e){ 
      var id = e.target.id;
      e.stopPropagation();
      pickADay(id);

    });
  }

  day_item_label = document.createElement("span");
  day_item_label.setAttribute("class", "calendar__day-label");
  day_item_label.setAttribute("id", "ditem-"+ cell_id);
  day_item_label.appendChild(document.createTextNode(day_label));

  day_item.appendChild(day_item_label);

  return day_item;
}

function goToNextMonth(){
  if(rs_current_month < 12){
    
    rs_current_month++;
    var monthSize = getMonthSize(rs_current_month); 

    var current_date_aux = new Date();
    first_day_date = new Date(current_date_aux.getFullYear(), rs_current_month-1, 1);
    var first_day = first_day_date.getDay();

    document.getElementById("rs-month-label").innerHTML = getMonthLabel(rs_current_month);

    drawCalendarBody(first_day, monthSize);

    updateDatesTitle();
    syncMonthEvents();
  }
}

function goToPrevMonth(){
  if(rs_current_month > 1){

    rs_current_month--;
    var monthSize = getMonthSize(rs_current_month); 

    var current_date_aux = new Date();
    first_day_date = new Date(current_date_aux.getFullYear(), rs_current_month-1, 1);
    var first_day = first_day_date.getDay();

    document.getElementById("rs-month-label").innerHTML = getMonthLabel(rs_current_month);

    drawCalendarBody(first_day, monthSize);

    updateDatesTitle();
    syncMonthEvents();
  }
}


function pickADay(day_item){
  var day_index = day_item.split("-")[1];

  var old_picked = document.getElementById("ditem-" + rs_picked_day);
  old_picked.classList.remove("calendar__day--active");

  if(rs_picked_day == rs_today && rs_current_month == rs_today_month){
    old_picked.classList.add("calendar__day--today");
  }

  rs_picked_day = day_index;

  var new_picked = document.getElementById("ditem-" + rs_picked_day);
  new_picked.classList.add("calendar__day--active");

  if(rs_picked_day == rs_today && rs_current_month == rs_today_month){
    new_picked.classList.remove("calendar__day--today");
  }

  updateDatesTitle();
  showDayEvents();
}

function drawDatesContext(){
  var dates = document.getElementById("rs-dates");

  var title = document.createElement("div");
  title.setAttribute("id", "rs-dates__title");
  title.setAttribute("class", "dates__title");

  dates.appendChild(title);

  var dates_list = document.createElement("div");
  dates_list.setAttribute("id", "rs-dates__list");
  dates_list.setAttribute("class", "dates__list");

  dates.appendChild(dates_list);

  updateDatesTitle();

  
}

function updateDatesTitle(){
  var title = document.getElementById("rs-dates__title");
  title.innerHTML = "";
  var date = new Date();
  date = new Date(date.getFullYear(), rs_current_month-1, rs_picked_day);

  var day_lbl = getDayLabel(date.getDay());
  var month_lbl = getMonthLabel(rs_current_month).toLowerCase();
  var year = date.getFullYear();

  title.appendChild(document.createTextNode(day_lbl));

  var title_small = document.createElement("small");
  title_small.appendChild(document.createTextNode(rs_picked_day + " de " + month_lbl + " de " + year));
  title.appendChild(title_small);
}

function drawAEvent(e_subject, e_time){
  var dates_list = document.getElementById("rs-dates__list");

  var item = document.createElement("div");
  item.setAttribute("class", "dates__item");

  var item_i = document.createElement("i");
  item_i.setAttribute("class", "fas fa-circle");

  var item_small = document.createElement("small");
  item_small.appendChild(document.createTextNode(e_time));

  item.appendChild(item_i);
  item.appendChild(document.createTextNode(e_subject));
  item.appendChild(item_small);

  dates_list.appendChild(item);

}

function updateCalendarDataSource(json_data){
  rs_calendar_data = JSON.parse(json_data);
  if(rs_calendar_data){
    syncMonthEvents();
  }
}

function syncMonthEvents(){
  if(rs_calendar_data[rs_current_month] != "OFF"){  
    var month_data = rs_calendar_data[rs_current_month];

    for(var i = 1; i<=getMonthSize(rs_current_month); i++){
      var aday = document.getElementById("ditem-"+i);
      aday.classList.remove("scheduled");
      if(month_data[i]!="OFF"){
        aday.classList.add("scheduled");
      }
    }

  }
  showDayEvents();
}

function showDayEvents(){
  var dates_list = document.getElementById("rs-dates__list");
  dates_list.innerHTML = "";

  if(rs_calendar_data[rs_current_month] != "OFF"){  
    var month_data = rs_calendar_data[rs_current_month];

    var day_data = month_data[rs_picked_day];
    if(day_data != "OFF"){
      for(var i = 0; i<day_data.length; i++){
        drawAEvent(day_data[i][0], day_data[i][1]);
      }
    }else{
      dates_list.innerHTML = '<p style="text-align: center" >No hay eventos programados.</p>';
    }

  }else{
    dates_list.innerHTML = '<p style="text-align: center" >No hay eventos programados.</p>';
  }
}

function generateTestCalendarData(){
  var full_data = new Array();
  var cal_data = new Array();

  cal_data[0] = "RS-Calendar";
  cal_data[1] = "OFF";
  cal_data[2] = new Array(
    new Array("Citación a turno # 1","8:00 AM"),
    new Array("Citación a turno # 2","6:00 PM"),
    new Array("Citación a turno # 3","10:00 PM")
  );
  cal_data[3] = new Array(
    new Array("Citación a turno # 4","5:00 AM")
  );
  cal_data[4] = "OFF";
  cal_data[5] = "OFF";
  cal_data[6] = "OFF";
  cal_data[7] = new Array(
    new Array("Citación a turno # 5","8:00 AM"),
    new Array("Citación a turno # 6","6:00 PM")
  );
  cal_data[8] = "OFF";
  cal_data[9] = new Array(
    new Array("Citación a turno # 7","5:00 AM")
  );
  cal_data[10] = "OFF";
  cal_data[11] = "OFF";
  cal_data[12] = "OFF";
  cal_data[13] = "OFF";
  cal_data[14] = "OFF";
  cal_data[15] = "OFF";
  cal_data[16] = "OFF";
  cal_data[17] = "OFF";
  cal_data[18] = "OFF";
  cal_data[19] = new Array(
    new Array("Citación a turno # 8","8:00 AM"),
    new Array("Citación a turno # 9","6:00 PM"),
    new Array("Citación a turno # 10","10:00 PM"),
    new Array("Citación a turno # 11","8:00 AM"),
    new Array("Citación a turno # 12","6:00 PM"),
    new Array("Citación a turno # 13","10:00 PM")
  );
  cal_data[20] = new Array(
    new Array("Citación a turno # 14","5:00 AM")
  );
  cal_data[21] = new Array(
    new Array("Citación a turno # 15","5:00 AM"),
    new Array("Citación a turno # 16","5:00 AM")
  );
  cal_data[22] = new Array(
    new Array("Citación a turno # 17","5:00 AM")
  );
  cal_data[23] = "OFF";
  cal_data[24] = "OFF";
  cal_data[25] = "OFF";
  cal_data[26] = "OFF";
  cal_data[27] = new Array(
    new Array("Citación a turno # 15","5:00 AM"),
    new Array("Citación a turno # 16","5:00 AM")
  );
  cal_data[28] = new Array(
    new Array("Citación a turno # 15","5:00 AM"),
    new Array("Citación a turno # 16","5:00 AM")
  );
  cal_data[29] = "OFF";
  cal_data[30] = "OFF";
  cal_data[31] = new Array(
    new Array("Citación a turno # 17","5:00 AM")
  );

  full_data[1] = "OFF";
  full_data[2] = "OFF";
  full_data[3] = "OFF";
  full_data[4] = cal_data;
  full_data[5] = "OFF";
  full_data[6] = "OFF";
  full_data[7] = cal_data;
  full_data[8] = "OFF";
  full_data[9] = "OFF";
  full_data[10] = "OFF";
  full_data[11] = "OFF";
  full_data[12] = "OFF";

  return JSON.stringify(full_data);
}

