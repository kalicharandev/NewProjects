
function buttonTip() {
    console.log("welcome");
    const divinput = document.getElementById("tipInput");

  if (divinput.style.display === "block"){
    divinput.style.display = "none";
    console.log("none");
  } else {
    divinput.style.display = "block";
    console.log("block");
  }

}


 function getSplit(){
    let billAmount = document.getElementById("billAmount").value;
console.log("billamount" + billAmount);
let friendsPay = document.getElementById("friendsPay").value;
console.log("friendsPay:" + friendsPay);

let spliterResult = document.getElementById("spliterResult");
let result = "";

let totalTip = document.getElementById("tipPercent").value;
let totalTipAmount = parseInt(billAmount) + parseInt(totalTip); 
result =  totalTipAmount / friendsPay ;

console.log("result:" + result);

spliterResult.innerHTML = `${result} RS per person for ${billAmount} for ${friendsPay}`;

}


    


                
   

        

