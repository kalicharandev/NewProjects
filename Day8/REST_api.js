function getRepos(){
    document.getElementById('output').style.display="block";
   const userrepo = document.getElementById('username').value;    
   console.log("name" + userrepo);
    fetch(`https://api.github.com/users/${userrepo}/repos`)
    .then(response=>response.json()
        .then(data=>{
        console.log(data);
        let githubRepoName = `<div class="output-container" id="output" style="display:block">`;
        let githubRepoFullName = `<div class="output-container" id="output" style="display:block">`;
        
        for (let i = 0; i < data.length; i++) {
           // text += cars[i] + "<br>";
           console.log(data[i].name);
           console.log(data[i].full_name);
           githubRepoName += `<div class="user"> <p id="user">${data[i].name}</p></div>`;
           githubRepoFullName += `<div> class="repos"> <p id ="repos">${data[i].full_name}</p></div>`;
          }
          document.getElementById('user').innerHTML= `${githubRepoName} </div>`;
          document.getElementById('repos').innerHTML = `${githubRepoFullName} </div>`;

        
        //document.getElementById('repos').innerHTML=data.repos +" repository";
       // document.getElementById('following').innerHTML=data.following + " Following";
       // document.getElementById('profile').innerHTML=`
       // <img src="${data.avatar_url}" />
        
    }))
}


//list repos

function getRepository(){
    document.getElementById('repos').style.display="block";
   const userrepo = document.getElementById('username').value;    
   console.log("name" + userrepo);
    fetch(`https://api.github.com/users/${userrepo}/repos`)
    .then(response=>response.json()
        .then(data=>{

        console.log(data);
        let githubRepoName ="";
        let githubRepoFullName ="";
        let githubrepoprofile ="";
        let githubRepologin ="";
        
        for (let i = 0; i < data.length; i++) {
           // text += cars[i] + "<br>";
           console.log(data[i].name);
           console.log(data[i].full_name);
          // githubRepoName += `<div class="repoName"> ${data[i].name}</div>`;
           //githubRepoFullName +=`<div class ="repoFullName">${data[i].full_name}</div>`;
          // githubrepoprofile +=`<div class ="profile">${data[i].owner.avatar_url}</div>`;
          // githubRepologin +=`<div class ="login">${data[i].owner.profile}</div>`;

          githubRepoName += ` <div class="output-container" id="output" style="display: block;">
                                <div class="profile" id="profile">
                                    <img src="${data[i].owner.avatar_url}">
                                </div>
                                <div class="reponame">
                                    <h1 id="name">${data[i].name}</h1>
                                </div>
                                <div class="bio">
                                   <p id="bio">${data[i].full_name}</p>
                               </div>
                               <div class="info">
                                   <ul>
                              <li> ${data[i].owner.login} </li>
                                 </ul>     
                                   
                               </div>
                               </div>
                                                         
            `
          }
          document.getElementById('repos').innerHTML= githubRepoName;
          //document.getElementById('repos').innerHTML = githubRepoFullName;
          //document.getElementById('profile').innerHTML=`<img src="${githubrepoprofile}" />`;
          //document.getElementById('login').innerHTML= githubRepologin;
  
        
    }))
}