var request = new XMLHttpRequest();

const airportInput = document.querySelector(".airport-input");
const searchButton = document.querySelector(".search-button");
let airportCode = "";

const proxy = "https://cors-anywhere.herokuapp.com/";

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

searchButton.addEventListener('click', function() {
    airportCode = airportInput.value;
    request.open('GET', `${proxy}https://avwx.rest/api/metar/${airportCode}?options=&format=json&onfail=cache`);
    request.send();
})



