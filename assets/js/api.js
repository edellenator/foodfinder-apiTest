const yelpKey = "";
let myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + yelpKey);


fetch("https://api.yelp.com/v3/businesses/search?term=by-chloe&location=boston", {
  headers: myHeaders 
}).then((response) => {
  return response.json();
}).then((data) => {
  console.log(data);
});


const geoKey = "";
var geoUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=" + geoKey;


fetch(geoUrl)
.then((response) => {
  return response.json();
}).then((data) => {
  console.log(data);
});




