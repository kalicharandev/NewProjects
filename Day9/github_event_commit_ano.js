function anotherEventCommit(){
    document.getElementById('eventCommit').style.display="block";
   const anotherCommit = document.getElementById('username').value;    
   console.log("name" + anotherCommit);
    fetch(`https://api.github.com/users/${anotherCommit}/events/public`)
    .then(response=>response.json()
        .then(data=>{
         
        console.log(data);
        let githubEventCommit ="";

        for(let i = 0; i < data.length; i++){

         const {actor, payload} = data[i];

         const {commits} = payload;
         
         

        for (let j = 0; j < commits.length; j++) {
           
                      console.log(commits[j]);

                      

        
          githubEventCommit += ` <div class="output-container" id="output" style="display: block;">
                                <div class="profile" id="profile">
                                    <img src="${actor.avatar_url}">
                                </div>
                                <div class="reponame">
                                    <h1 id="name">${commits[j].sha}</h1>
                                </div>
                                <div class="bio">
                                   <p id="bio">${commits[j].author.name}<br>
                                 ${commits[j].author.email}</p>
                               </div>
                               <div class="info">
                                   <ul>
                              <li> ${commits[j].message} </li>
                                 </ul>     
                                   
                               </div>
                               </div>
                                                         
            `
          }
        }
          document.getElementById('eventCommit').innerHTML= githubEventCommit;
          
        
    }))
}