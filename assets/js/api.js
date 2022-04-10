const yelpKey = "2pPZU_Ojp34tr6rblC_FiemgpCQPtmI9SA7SBPSQcJVWoW4h2FqbYkHS4ZRXuMNCIXwjaqK6pLfrhOUkviSyTlQiCcbY4a4PZo34EdvTA2CaPSv4Cpfa8tx7S6BPYnYx";
let myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + yelpKey);


fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=by-chloe&location=boston", {
  headers: myHeaders 
}).then((response) => {
  return response.json();
}).then((data) => {
  console.log(data);
});


const geoKey = "AIzaSyARpucgxGXAyo44vJC62_kCJZLeC1R0Tuo";
var geoUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=" + geoKey;


fetch(geoUrl)
.then((response) => {
  return response.json();
}).then((data) => {
  console.log(data);
});




