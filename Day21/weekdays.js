function myWeekDays(){
 let weekDays = document.getElementById("weekId").value;
 let days = "";
 if(weekDays == 0){
    days = "sunday";
 }else  if(weekDays == 1){
    days = "monday";
 } else if(weekDays == 2){
    days = "tuesday";
 }else  if(weekDays == 3){
    days = "wednesday";
 }else if(weekDays == 4){
    days = "thursday";
 }else if(weekDays == 5){
    days = "friday";
 }else if(weekDays == 6){
    days = "saturday";
 }else if(weekDays >6){
  days = "undefined";
 }
 document.getElementById("content_Displayer").innerHTML = days;
}