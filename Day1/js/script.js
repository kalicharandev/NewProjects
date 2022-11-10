
const projectsData = [
    {
        "id" : "Day1",
        "name": ["Display Input TextBox Items"],
    "demourl": [ "user.html" ],
    "repourl": "https://github.com/kalicharandev/NewProjects/tree/main/Day1",
},
{
    "id" : "Day2",
    "name": ["Range"],
"demourl": ["../Day2/range.html"],
"repourl": "https://github.com/kalicharandev/NewProjects/tree/main/Day2",
},
{
    "id" : "Day3",
    "name": ["CheckBox"],
"demourl": ["../Day3/checkbox.html"],
"repourl": "https://github.com/kalicharandev/NewProjects/tree/main/Day3",
},
{
    "id" : "Day4",
    "name": ["HTML checkbox_includejs", "HTML Radio"],
"demourl": ["../Day4/checkbox_includejs.html" , "../Day4/radio.html"],
"repourl": "https://github.com/kalicharandev/NewProjects/tree/main/Day4",
},
{
    "id" : "Day5",
    "name": ["HTML checkbox GobalVariable"],
"demourl": ["../Day5/checkbox_nogobalvar.html"],
"repourl": "https://github.com/kalicharandev/NewProjects/tree/main/Day5",
},
{
    "id" : "Day6",
    "name": ["HTML Factorial", "HTML Fahrenheit Temperature"],
"demourl": ["../Day6/factorial.html", "../Day6/fahrenheit_temperature.html"],
"repourl": "https://github.com/kalicharandev/NewProjects/tree/main/Day6",
},
{
    "id" : "Day7",
    "name": ["Weather API", "JSON Data"],
"demourl": ["../Day7/weather.html", "../Day7/json_data.html"],
"repourl": "https://github.com/kalicharandev/NewProjects/tree/main/Day7",
},
{
    "id" : "Day8",
    "name": ["GitHub user", "GitHub Event", "GitHub Repository"],
"demourl": ["../Day8/github_api.html","../Day8/github_event.html", "../Day8/REST_api.html"],
"repourl": "https://github.com/kalicharandev/NewProjects/tree/main/Day8",
},
{
    "id" : "Day9",
    "name": ["GitHub Event Commit(nested array objects)","JSON Varaiable Binding", "HTTP Post Method"],
"demourl": ["../Day9/github_event_commit.html", "../Day9/github_event_commit_ano.html", "../Day9/github_post_repo.html"],
"repourl": "https://github.com/kalicharandev/NewProjects/tree/main/Day9",
},
{
    "id" : "Day10",
    "name": ["Space API"],
"demourl": ["../Day10/space_api.html"],
"repourl": "https://github.com/kalicharandev/NewProjects/tree/main/Day10",
},
{
    "id" : "Day11((JS converted into Jquery))",
    "name": ["login form","Rate Item","progress Step"],
"demourl": ["../Jquery_Day11/Login.html", "../Jquery_Day11/rate.html","../Jquery_Day11/progress_step.html"],
"repourl": "https://github.com/kalicharandev/NewProjects/tree/main/Jquery_Day11",
},
];
 let  TableDisplayer ="";

for (let i = 0; i < projectsData.length; i++) {
    console.log(projectsData[i]);

    let projectsName = projectsData[i].name;
    let nameListHtml =  "";
    
    for(let j = 0;  j < projectsName.length; j++){
        nameListHtml += `<li>${projectsName[j]}</li>`; 
    }

    let demoUrls = projectsData[i].demourl;
       
    
    let demoUrlListHtml = "";

    for (let k = 0; k < demoUrls.length; k++){
        demoUrlListHtml += `<li> <a href="${demoUrls[k]}"  target="_blank">  View Demo</a></li>`;
    }


   TableDisplayer += ` <div class="output-container">
                   <table>
                
                   <tr>
            <td>${projectsData[i].id}</td>
            <ul>
            <td>
                ${nameListHtml}            
            </td>
            <td>
             ${demoUrlListHtml}
            </td>
            <td><a href="${projectsData[i].repourl}"   target="_blank">  View Repository</a></td>
          </ul>
          </tr>
          
                   </table>
   
               </div>
   
   
   
   
   
   `
}
document.getElementById("jscontainer").innerHTML = TableDisplayer;
           

                         
                            


