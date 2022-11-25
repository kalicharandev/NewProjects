function myRepeat(){
let count = document.getElementById("countid").value;
// console.log(count);
let name = "";
// let result = name.repeat(count);
for(let i = 0; i < count; i++){
console.log(i);
if ( i % 2 == 0){
    console.log("kalis");
    name += `kalis `;
}
else{
    console.log("charan");
    name += `charan `;
}
}
document.getElementById("content_Displayer").innerHTML = name ;

}