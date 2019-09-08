
// html request
var request = new XMLHttpRequest();

// Grab html elements
const airportInput = document.querySelector(".airport-input");
const searchButton = document.querySelector(".search-button");
const raw = document.querySelector(".raw");
const time = document.querySelector(".time");
const wind = document.querySelector(".wind");
const visibility = document.querySelector(".visibility");
const ceiling = document.querySelector(".ceiling");
const temperature = document.querySelector(".temperature");
const dewpoint = document.querySelector(".dewpoint");
const altimeter = document.querySelector(".altimeter");
const remarks = document.querySelector(".remarks");

let airportCode = "";

// Allow API calls from localhost
const proxy = "https://cors-anywhere.herokuapp.com/";

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
    let response = JSON.parse(this.responseText);
    raw.textContent = response.raw;
    time.textContent = "Time: " + response.time.dt;
    wind.textContent = "Wind: " + response.wind_direction.repr + " at " + response.wind_speed.repr + " knots " + ((response.wind_gust != null) ? response.wind_gust : "");
    visibility.textContent = "Visibility: " + response.visibility.value + " SM";
    ceiling.textContent = "Ceiling: " + response.clouds.map(item => {
        return " " + item.repr;
    });
    temperature.textContent = "Temperature: " + response.temperature.repr + "º C";
    dewpoint.textContent = "Dewpoint: " + response.dewpoint.repr + "º C";
    altimeter.textContent = "Altimeter: " + response.altimeter.value;
    remarks.textContent = "Remarks: " + response.remarks;
  }
};

// Search the API for the airport int the text field
searchButton.addEventListener('click', function() {
    airportCode = airportInput.value;
    request.open('GET', `${proxy}https://avwx.rest/api/metar/${airportCode}?options=&format=json&onfail=cache`);
    request.send();
})



