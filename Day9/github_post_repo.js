  function reposPost(){
     const repoistoryName = document.getElementById('RepositoryName').value;    
   console.log("name" + repoistoryName);

   const params = {
    "name": repoistoryName,
 "description": "This is your first repo created using API!",
 "homepage": "https://github.com",
 "private": false,
 "is_template": false
}
const options = {
    method: 'POST',
    headers: {           
        "Authorization": "Bearer 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",
        "Content-Type": "application/json"
      },
    body: JSON.stringify( params )  
};
fetch( 'https://api.github.com/user/repos', options)
    .then( response => response.json() )
    .then( response => {
        console.log("response" + response);
         

          document.getElementById('repositoryid').innerHTML= "passed";
          
        
    });
}
