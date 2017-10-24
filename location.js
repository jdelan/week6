// You can use x.toFixed(n) to round a floating-point number
// where   x  is a floating-point number
//   and   n  is the number of digits after the decimal point

let handlePosition = function(info) {
  console.info(info)
  let div = document.getElementById("location");
  let url = "https://maps.googleapis.com/maps/api/staticmap?center=" + info.coords.latitude.toFixed(4) + "," + info.coords.longitude.toFixed(4) + "&zoom=15&size=600x400&maptype=hybrid&key=AIzaSyBrLfaqBHZNoiI8463XDdy57fJHiwA8vy4"
  div.innerHTML = "<img src=\"" + url + "\">";
};

let link = document.getElementById("get_location")
link.addEventListener("click", function(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(handlePosition);
});
