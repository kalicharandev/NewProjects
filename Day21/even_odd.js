function getEvenOdd(){
    let inputNum =  document.getElementById("inputNum").value;
    let inputText = document.getElementById("inputText").value;
    let vowels = "";
    let consonants = "";
    let even = [];
    let odd =[];
    for (let i =0; i < inputText.length; i++){
        console.log(inputText[i]);
        if("aeiou".match(inputText[i])){
            vowels += inputText[i] +"<br>";
            console.log("vowels:" + vowels);
        }else{
            consonants += inputText[i] +"<br>";
        }
        
    }
    
    for (let i =0; i < inputNum.length; i++){
        if(inputNum[i] % 2 == 0){
            even.push( inputNum[i]);
            console.log(`even:${inputNum[i]}`);
        }else{
            odd.push(inputNum[i])
            console.log(`odd:${inputNum[i]}`);
        }
        
    }
   
    // for(let i = 0;  i< even.length; i++){
    //     console.log(even[i]);
    //     evenDisplay +=  `${even[i]}<br>`;
    // }

    // for(let i = 0; i < odd.length; i++){
    //     console.log(odd[i]);
    // }
     document.getElementById("vowelsValue").innerHTML = vowels;

    document.getElementById("consonantsValue").innerHTML = consonants;

    document.getElementById("evenValue").innerHTML = even.join("<br>");
    document.getElementById("oddValue").innerHTML= odd.join("<br>");

    }
