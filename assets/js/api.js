const yelpKey = "";
let originHeader = new Headers();
let methodHeader = new Headers();
originHeader.append("Access-Control-Allow-Origin", "*");
methodHeader.append("Access-Control-Allow-Methods", "fetch")
var yelpAPI="https://api.yelp.com/v3/businesses/search?term=by-chloe&location=boston"

// fetch(yelpAPI, {
//   headers: myHeaders 
// }).then((response) => {
//   return response.json();
// }).then((data) => {
//   console.log(data);
// });
// https://cors-anywhere.herokuapp.com/

const geoKey = "";
var geoUrl = "https://nominatim.openstreetmap.org/search?q=400+north+louise+street,+glendale&addressdetails=1/";


var fetchGeoData = function(){
  fetch(geoUrl, {
    headers:originHeader
  }).then(function(response){
    if (response.ok) {
      response.json().then(function(data){
        console.log(data);
      })
    }
    else {
      console.log('selection invalid')
    }
  })
};

fetchGeoData();
