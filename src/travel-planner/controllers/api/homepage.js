var getTravelCountry = function(country) {
    // Get users country 
    fetch("https://travelbriefing.org/" + country + "?format=json")
    .then(res => res.json())
    .then(data => console.log(data))
    console.log("county name was called");
};

getTravelCountry();


// Get flag img
var flagIconEl = document.createElement("img")
    
    flagIconEl.setAttribute("src", "https://www.countryflags.io/" + names.ios2 + "/shiny/64.png")
    flagIconEl.setAttribute("alt", "Country Flag")
    flagIconEl.setAttribute("id", "cuntryFlag")
    // reposContainer.appendChiled(flagIconEl)
    console.log("flag was searched");


// var getTravelRepos = function() {
//     fetch("https://travelbriefing.org/Netherlands?format=json").then(function(response) {
//         response.json().then(function(data) {
//             console.log(data);
//         });
//     });
// };
