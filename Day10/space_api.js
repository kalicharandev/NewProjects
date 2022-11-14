 function myFlight(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      // const launchResponse = await ;
      // const launchData = await launchResponse.json();


     fetch("https://api.spacexdata.com/v3/launches", requestOptions)
        .then(response =>  response.json()
        .then( data=>{
       console.log(data);
       
        let flight_var = "";         
        let flightCall = "";



         for(i = 0; i < data.length; i++){

          console.log("data" + data[i]);
         

         flight_var += ` <div class="ouput_container" id="output" style="display:block;">
                         <div class="filght_number" id="filght">
                            <p id="filght_number">${data[i].flight_number}<br>
                            <p id="filght_number">${data[i].mission_name}</p>
                            
                        </div>  
                        </div>
                       `
         }    
        // fetch(`https://api.spacexdata.com/v3/launches/${data[i].flight_number}`, requestOptions)
        // .then(flightresponse =>  flightresponse.json())
        // .then(fligthdata=>{
        //  console.log( fligthdata);


        //   flightCall +=  ` <div class="output_container" id="output" style="display:block;">
          
        //                       <div class="filght_number" id="filght">
        //                         <p id="filght_number">${fligthdata}<br>
                                
        //                         </div>
                                      
        //   </div>
        //   `

         document.getElementById("flights_id").innerHTML = flight_var;
        //   document.getElementById("demo_dummy").innerHTML = flightCall;
        
        
         
                     
}))
}


