function getEvent(){
    document.getElementById('event').style.display="block";
   const userEvent = document.getElementById('username').value;    
   console.log("name" + name);
    fetch(`https://api.github.com/users/${userEvent}/events/public`)
    .then(response=>response.json()
        .then(data=>{
    
        console.log(data);
        let githubEvent ="";
        
        
        for (let i = 0; i < data.length; i++) {
           
           console.log(data[i].actor.login);
           

          githubEvent += ` <div class="output-container" id="output" style="display: block;">
                                <div class="profile" id="profile">
                                    <img src="${data[i].actor.avatar_url}">
                                </div>
                                <div class="reponame">
                                    <h1 id="name">${data[i].actor.login}</h1>
                                </div>
                                <div class="bio">
                                   <p id="bio">${data[i].repo.name}</p>
                               </div>
                               <div class="info">
                                   <ul>
                              <li> ${data[i].payload.push_id} </li>
                                 </ul>     
                                   
                               </div>
                               </div>
                                                         
            `
          }
          document.getElementById('event').innerHTML= githubEvent;
          
        
    }))
}