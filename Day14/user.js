function getLogin(){
    let regex = /^[A-Za-z]+$/;
    let fname = document.getElementById("fname").value;
    console.log("fname - " + fname);

    let firstname = regex.test(fname);
    console.log("firstname - " + firstname );

    var lname = document.getElementById("lname").value;
    console.log("lname - " + lname);

    let lastname = regex.test(lname);
    console.log("lastname" + lastname);

    var pword = document.getElementById("pword").value;
    console.log("password" + pword);

    let isValidPassword = false ;
    if(pword.length > 10){
        isValidPassword = true;
    }



     if(firstname && lastname && isValidPassword ){
        document.getElementById("displayer").innerHTML = "success"
        console.log("success" + firstname);
        console.log("success" + lastname);
    }else{
        document.getElementById("displayer").innerHTML = "failed"
        console.log("failed");
    }
}