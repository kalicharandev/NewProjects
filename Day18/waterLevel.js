let count = 0;

function getWaterLevel(){
    count++;
    let water1 = document.getElementById("water1");
    let water2 = document.getElementById("water2");
    let water3 = document.getElementById("water3");
    let water4 = document.getElementById("water4");

    water4.style.display = "none"

    console.log("count - " + count);
    console.log( water4.style.display === "none" );
    console.log( water4.style.display === "block" );

    
      if(water4.style.display === "block"){
          water4.style.display = "none";
          console.log("water4none");
      
      } else if(water4.style.display === "none" && count === 1){
        water4.style.display = "block";
        console.log("water4block");
      }
      if (water3.style.display === "block"){
        water3.style.display = "none";
        console.log("water3none");
      } else if(water3.style.display = "none" && count === 2){
        water4.style.display = "block";
        water3.style.display = "block";
        console.log("water3block");
      }
      if (water2.style.display === "block"){
        water2.style.display = "none";
        console.log("water2none");
      } else if(water2.style.display = "none" && count === 3){
        water4.style.display = "block";
        water3.style.display = "block";
        water2.style.display = "block";
        console.log("water2block");
      }
      if (water1.style.display === "block"){

        water1.style.display = "none";
        console.log("water1none");
      } else if(water1.style.display = "none" && count === 4){
        water4.style.display = "block";
        water3.style.display = "block";
        water2.style.display = "block";
        water1.style.display = "block";
        console.log("water1block");
      }

      if(count === 5){
        count = 0;
      }


    
    }
