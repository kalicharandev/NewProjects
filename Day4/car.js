
let car_value = "";
  let bike_value = "";
  let van_value = "";

  function myCar()
  {
    let vehicles = document.getElementById("car");
    let cars_text = document.getElementById("cars_text");
    cars_text.value = vehicles.value;
    car_value = vehicles.value

    
  }
  function myBike()
  {
    let vehicle = document.getElementById("bike");
    let bike_text = document.getElementById("bike_text");
    bike_text.value = vehicle.value;
    bike_value = vehicle.value
    
  }
  function myVan()
  {
    let vehi = document.getElementById("van");
    let van_text = document.getElementById("van_text");
    van_text.value = vehi.value;
    van_value = vehi.value;
   
    
  }
  function myvehicle(){
    let vehicle_value = "";
    if(car_value){
  console.log(car_value);
  vehicle_value += car_value;
}else{
  console.log(car_value);
}
if(bike_value){
  console.log(bike_value);
  vehicle_value += "<br/>" + bike_value;
}else{
console.log(bike_value);
}


if(van_value){
  console.log(van_value);
vehicle_value += "<br/>" + van_value;
}else{
console.log(van_value);
}
document.getElementById("this_vehicle").innerHTML = vehicle_value;
  //  document.getElementById("this_vehicle").innerHTML = car_value  + "<br/>" + bike_value + "<br/>" + van_value;
  }
  