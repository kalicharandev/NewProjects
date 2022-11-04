  function reposPost(){
    document.getElementById('eventCommit').style.display="block";
   const anotherCommit = document.getElementById('username').value;    
   console.log("name" + anotherCommit);

   const params = {
    "name": "My War",
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
         

          document.getElementById('eventCommit').innerHTML= "test";
          
        
    });
}
