// Listen for the Search button and contact the movie service.
let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function(event) {
  event.preventDefault();
  let search_term = document.getElementsByTagName("input")[0].value;
  getMovie(search_term);
  document.getElementsByTagName("input")[0].value = ""
  document.getElementsByTagName("input")[0].autofocus = 1;
})


// This function takes a potential movie title as input,
// and outputs a URL that will query the service for that title.
let movieServiceUrl = function(title) {
  let api_key = "e9743662f5a39568d8e25225f2c97e09";
  // let api_key = 'bde024f3eb43f597aafe01ed9c9098c6'

  let url = "https://api.themoviedb.org/3/search/movie?api_key=" + api_key + "&language=en-US";
  url = url + "&query=" + title;
  return url;
}

// This function take a movie title as input,
// contacts the movie service,
// converts the service's response into JSON,
// then updates the page.
// If anything goes wrong, it will display an error message.
let getMovie = function(title) {
  let serviceUrl = movieServiceUrl(title);
  fetch(serviceUrl).then(convertDataToJSON).then(updatePage).catch(displayError);
}

// Convert the movie service's raw response into JSON
// (ie. a JavaScript object)
let convertDataToJSON = function(response) {
  return response.json();
}

// Given the data from the service,
// assume the first result is the best match
// and construct a URL to the poster image.
// Then update the <img> element with that URL.
let updatePage = function(dataFromService) {
  // console.debug(dataFromService)
  topHit = dataFromService.results[0];
  posterUrl = "http://image.tmdb.org/t/p/w300/" + topHit.poster_path;
  posterElement = document.querySelector('#movie img');;
  posterElement.src = posterUrl;
}

let displayError = function(err, status, msg) {
  console.debug(err)
  console.debug(status)
  console.debug(msg)
  window.alert("Sorry, something went wrong.  Check the console for details.");
}

// The official list of genres as published by themoviedb.org
let genres = {
      "28": "Action",
      "12": "Adventure",
      "16": "Animation",
      "35": "Comedy",
      "80": "Crime",
      "99": "Documentary",
      "18": "Drama",
      "10751": "Family",
      "14": "Fantasy",
      "36": "History",
      "27": "Horror",
      "10402": "Music",
      "9648": "Mystery",
      "10749": "Romance",
      "878": "Science Fiction",
      "10770": "TV Movie",
      "53": "Thriller",
      "10752": "War",
      "37": "Western"
  };
