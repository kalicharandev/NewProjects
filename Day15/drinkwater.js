let result =  document.getElementById("value");
let count = 0;
 let isWater1Selcted = false;
 let isWater2Selected = false;
 let isWater3Selcted = false;
 let isWater4Selcted = false;

function getWaterLevel(index){

console.log(index);
if(isWater1Selcted && index == 1){
   count--;
    result.innerHTML = count;
    isWater1Selcted = false;
   console.log(`count decrement" + ${count} + isWater1Selcted - ${isWater1Selcted}`);
}else if(!isWater1Selcted && index == 1){
    count++;
    isWater1Selcted = true;
    console.log(`count increment" + ${count} + isWater1Selcted - ${isWater1Selcted}`);
} else if(isWater2Selected && index == 2){
   count--;
   isWater2Selected = false;
   result.innerHTML = count;
   console.log(`count decrement" + ${count} + isWater2Selcted - ${isWater2Selected}`);
}else if(index == 2 && !isWater2Selected){
    count++;
    isWater2Selected = true;
    console.log(`count increment" + ${count} + isWater2Selcted - ${isWater2Selected}`);
}else if(isWater3Selcted && index == 3){
    count--;
    isWater3Selcted = false;
   console.log(`count decrement" + ${count} + is  isWater3Selcted -${isWater3Selcted}`);
}else if(!isWater3Selcted && index ==3){
    count++;
    isWater3Selcted = true;
    console.log(`count increment" + ${count} + isWater3Selcted- ${isWater4Selcted}`);
}else if(isWater4Selcted && index == 4 ){
    count--;
    isWater4Selcted = false;
   console.log(`count decrement" + ${count} + is  isWater3Selcted -${isWater4Selcted}`);
}else if(!isWater4Selcted && index == 4){
    count++;
    isWater4Selcted = true;
    console.log(`count increment" + ${count} + isWater3Selcted- ${isWater4Selcted}`);

}


result.innerHTML = count;
}