$("#submit").click(function(){
    let regex = /^[A-Za-z]+$/;
    let fname = $("#fname").val();
    console.log(`fname: ${fname}`);

    let firstname = regex.test(fname);
    console.log(`firstname: ${firstname}`);

    var lname = $("#lname").val();
    console.log(`lname: ${lname}`);

    let lastname = regex.test(lname);
    console.log(`lastname: ${lastname}`);

    var pword = $("#pword").val();
    console.log(`password-: ${pword}`);

    let isValidPassword = false ;
    if(pword.length > 10){
        isValidPassword = true;
        
    }



     if(firstname && lastname && isValidPassword ){
        $("#displayer").html("success");
        console.log(`firstname : ${firstname} lastname: ${lastname} password: ${isValidPassword}`);
    }else{
        $("#displayer").html("failed");
        console.log("failed");
    }
});    
