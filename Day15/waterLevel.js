function getWaterLevel(){
    let water1 = document.getElementById("water1")
    let water2 = document.getElementById("water2")
    let water3 = document.getElementById("water3")
    let water4 = document.getElementById("water4")


        
    
      if (water4.style.display === "block"){
        water4.style.display = "none";
        console.log("water4none");
      } else {
        water4.style.display = "block";
        console.log("water4block");
      }
      if (water3.style.display === "block"){
        water3.style.display = "none";
        console.log("water3none");
      } else {
        water3.style.display = "block";
        console.log("water3block");
      }
      if (water2.style.display === "block"){
        water2.style.display = "none";
        console.log("water2none");
      } else {
        water2.style.display = "block";
        console.log("water2block");
      }
      if (water1.style.display === "block"){
        water1.style.display = "none";
        console.log("water1none");
      } else {
        water1.style.display = "block";
        console.log("water1block");
      }
    
    }
