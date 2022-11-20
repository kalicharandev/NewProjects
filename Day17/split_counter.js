 function getSplit(){

    let billAmount = document.getElementById("billAmount").value;
    console.log("billamount" + billAmount);
    let friendsPay = document.getElementById("friendsPay").value;
    console.log("friendsPay:" + friendsPay);

    let spliterResult = document.getElementById("spliterResult");
    let result = "";


    result = billAmount / friendsPay ;
    console.log("result:" + result);

    spliterResult.innerHTML = `${result} RS per person for ${billAmount} for ${friendsPay}`;


    // document.querySelector('#addTip').addEventListener('click', (e) => {
    //     e.preventDefault();
    //     showTipInput();
    //   })
      
    //   const showTipInput = () => {
    //     const tipBtns = document.querySelector('#tipInput')
    //     if (tipBtns.style.display === "block") {
    //       tipBtns.style.display = "none"
    //     } else {
    //       tipBtns.style.display = "block"
    //     }
    //   }

}
