async function myLanuches(){
     const launchResponse = await fetch("https://api.spacexdata.com/v3/launches");
     const launchData = await launchResponse.json();
     console.log("hi");
    return launchData;
}
async function getFlightsInformation(flightId){
    const flightResponse = await fetch(`https://api.spacexdata.com/v3/launches/${flightId}`);
    const flightData = await flightResponse.json();
   return flightData;
}



function getAdd(){
     myLanuches().then( launchData=>  
    {
        
        console.log(launchData);

    
        
       let launchesList ="";
     for (let i = 0; i < launchData.length; i++){
        console.log(launchData[i]);

        getFlightsInformation(launchData[i].flight_number)
        .then( (flightData) => {
    

            console.log("flightData..." + JSON.stringify(flightData));
             let filghtNumber ="";

           console.log("Mission Name" + flightData.launch_window);
           console.log("mission name:" + flightData.mission_name);
          console.log("mission id" + flightData.mission_id);
          console.log("launch_year" + flightData.launch_year);
          console.log("launch_date_unix" + flightData.launch_date_unix);
          console.log("launch_date_utc:"+flightData.launch_date_utc);   
          console.log("launch_date_local:"+flightData.launch_date_local);
          console.log("is_tentative:"+flightData.is_tentative);
          console.log("tentative_max_precision:"+flightData.tentative_max_precision);
          console.log("tbd:"+flightData.tbd);
          console.log("launch_window:"+flightData.launch_window);
          let rocketInfo =  flightData.rocket;
          console.log("rocketInfo:"+rocketInfo.rocket_id);

        console.log("rocket_name:" + rocketInfo.rocket_name);
        console.log("rocket_type:" + rocketInfo.rocket_type);
        let coresInfo = flightData.rocket.first_stage.cores;

        console.log("coresinfo:" +JSON.stringify(coresInfo));
        for(let j = 0; j < coresInfo.length; j++){
          console.log(coresInfo[j]);
          console.log("core_serial:" + coresInfo[j].core_serial);
          console.log("flight:" + coresInfo[j].flight);
          console.log("block:" + coresInfo[j].block);
          console.log("gridfins:" + coresInfo[j].gridfins);
          console.log("legs:" + coresInfo[j].legs);
          console.log("reused:" + coresInfo[j].reused);
          console.log("land_success:" + coresInfo[j].land_success);
          console.log("landing_intent:" + coresInfo[j].landing_intent);
          console.log("landing_type:" + coresInfo[j].landing_type);
          console.log("landing_vehicle:" + coresInfo[j].landing_vehicle);

           
    
    let getSecondStage = rocketInfo.second_stage
     console.log("secondstage:" + JSON.stringify(getSecondStage));
    
     
     let getLayout = getSecondStage.payloads;

     for (z = 0; z < getLayout.length; z++){
      console.log("payloads:" + getLayout[z]. payload_id);
      console.log("payloads:" + getLayout[z]. customers);
      console.log("orbit_params:" + getLayout[z].orbit_params.reference_system)
      console.log("launch_site:" + flightData.launch_site.site_name);
       console.log("launch_success:" + flightData.launch_site.site_id);
     }

 
     }
           
           filghtNumber += `<div container="finalContainer">
                            <p id= "flight_number>${flightData}</p>
           </div>`
             


        
           document.getElementById("numbers").innerHTML = filghtNumber;
        }).catch(error => console.log(error))

       

        
     

     launchesList += `<div id="outputcontainer">
     <p id="flight_data">${launchData[i].flight_number}</p><br>
     <p id="flight_data">${launchData[i].launch_year}</p><br>

     </div>`

     }                   
                        
           document.getElementById("demo_dummy").innerHTML = launchesList;
           //identify error              
    });//.catch(error => console.log("Error Occurred :" + error))
    
    
}


