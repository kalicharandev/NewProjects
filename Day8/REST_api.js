function getRepos(){
    document.getElementById('output').style.display="block";
   const userrepo = document.getElementById('username').value;    
   console.log("name" + userrepo);
    fetch(`https://api.github.com/users/${userrepo}/repos`)
    .then(response=>response.json()
        .then(data=>{
        console.log(data);
        let githubRepoName = `<div class="output-container" id="output" style="display:block">`;
        let githubRepoFullName = `<div>`;
        
        for (let i = 0; i < data.length; i++) {
           // text += cars[i] + "<br>";
           console.log(data[i].name);
           console.log(data[i].full_name);
           githubRepoName += `<div class="repo"> <p id="repo">${data[i].name}</p></div>`;
           githubRepoFullName += `<div>${data[i].full_name}</div>`;
          }
          document.getElementById('name').innerHTML= `${githubRepoName} </div>`;
          document.getElementById('repos').innerHTML = `${githubRepoFullName} </div>`
        ;

        
        //document.getElementById('repos').innerHTML=data.repos +" repository";
       // document.getElementById('following').innerHTML=data.following + " Following";
       // document.getElementById('profile').innerHTML=`
       // <img src="${data.avatar_url}" />
        
    }))
}