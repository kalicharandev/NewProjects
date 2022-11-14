function getEventCommit(){
    document.getElementById('eventCommit').style.display="block";
   const userCommit = document.getElementById('username').value;    
   console.log("name" + userCommit);
    fetch(`https://api.github.com/users/${userCommit}/events/public`)
    .then(response=>response.json()
        .then(data=>{
         
        console.log(data);
        let githubEventCommit ="";

        for(let i = 0; i < data.length; i++){

         const {commits} = data[i].payload;

         

        for (let j = 0; j < commits.length; j++) {
           
                      console.log(commits[j]);

         let author =
          githubEventCommit += ` <div class="output-container" id="output" style="display: block;">
                                <div class="profile" id="profile">
                                    <img src="${data[i].actor.avatar_url}">
                                </div>
                                <div class="reponame">
                                    <h1 id="name">${commits[j].sha}</h1>
                                </div>
                                <div class="bio">
                                   <p id="bio">${commits[j].author.name}</p>
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