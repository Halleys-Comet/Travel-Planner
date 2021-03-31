var getTravelCountry = function(country) {
    // Get users country 
    fetch("https://travelbriefing.org/" + country + "?format=json")
    console.log("county name was called");
};

getTravelCountry();

// var getTravelRepos = function() {
//     fetch("https://travelbriefing.org/Netherlands?format=json").then(function(response) {
//         response.json().then(function(data) {
//             console.log(data);
//         });
//     });
// };
