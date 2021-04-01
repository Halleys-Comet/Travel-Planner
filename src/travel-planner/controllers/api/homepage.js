function myTavel(countryName) {
    console.log('myTravel fired');
    var searchCountry;
    if (countryName != undefined) {
        console.log('countryName not undefined')
        searchCountry = countryName;
    } else {
        console.log('countryName from input')
        searchCountry = document.querySelector("#searchCountry").nodeValue;
        saveCountry (searchCountry)
    }

    var countryURL = 'https://travelbriefing.org/' + country + '?format=json';

    // location.href = "/api/searchcountry/" + country; --frontend javascript
    // router.get("/api/searchcountry/:country") --routes in the server
   // var countryURL = 'https://travelbriefing.org/' + country + '?format=json'; --router call
// axios.get(countryURL)
//    .then(function(res) {
//        return res.render("page", {data: res});
//    })
// then you can copy you index.html to a handlebars page and change the templates to show the info
// example:
//   <p>this is an example: {data.xxxx}</p>

// axios.get("https://cors-anywhere.herokuapp.com/https://www.api-football.com/demo/api/v2/leagueTable/" + league_id)
//                .then(response => {
//                  this.info = response.data.api.standings[0];
//                  console.log('updated info', response.data.api.standings[0]); // can you share the value here ?
//                }); ----put in controller routs



    console.log(countryURL);
    var countryInfo = fetch(countryURL)
    .then(function(res) {
        return res.json();
    })

        .then(function(data) {
            console.log(data)
        })

    // Flag icons
    var flagEl = document.createElement('img')
    flagEl.setAttribute('src', 'https://www.countryflags.io/' + data.names.ios2 + 'shiny/64.png')
    flagIconEl.setAttribute("alt", "Country Flag")
    flagIconEl.setAttribute("id", "cuntryFlag")
    reposContainer.appendChiled(flagEl)
    console.log("flag was searched");


    // Save Country searches to local storage

    function saveCountry(newCountry) {
        if (newCountry === "") {

        } else {
            var countryArray = JSON.parse(localStorage.getItem("saveCountry")) || [] ;
            if ( countryArray.includes(newCountry)) {
                //do nothing
            } else {
                //not in the array yet
                countryArray.push (newCountry)
            }
            localStorage.setItem("saveCountry", JSON.stringify(countryArray));
        }

    }


};

function displayBtn() {
    var countryArray = JSON.parse(localStorage.getItem("saveCountry")) || [] ;
    countryArray.forEach(element => {
        console.log(element)
        var btnEl = document.querySelector(".display-btn")
        var newBtn = document.createElement("button")
        newBtn.classList.add("btn", "btn-primary", "m-1")
        newBtn.textContent = element
        btnEl.appendChild(newBtn)
        

        newBtn.addEventListener("click", function() {
            console.log("the button was clicked")
            myTravel(element)
        });
    });


}

displayBtn()






// var getTravelCountry = function(country) {
//     // Get users country 
//     fetch("https://travelbriefing.org/" + country + "?format=json")
//     .then(res => res.json())
//     .then(data => console.log(data))
//     console.log("county name was called");
// };

// getTravelCountry();


// Get flag img
// var flagIconEl = document.createElement("img")
    
//     flagIconEl.setAttribute("src", "https://www.countryflags.io/" + names.ios2 + "/shiny/64.png")
//     flagIconEl.setAttribute("alt", "Country Flag")
//     flagIconEl.setAttribute("id", "cuntryFlag")
//     // repos-container.appendChiled(flagIconEl)
//     console.log("flag was searched");


// var getTravelRepos = function() {
//     fetch("https://travelbriefing.org/Netherlands?format=json").then(function(response) {
//         response.json().then(function(data) {
//             console.log(data);
//         });
//     });
// };
