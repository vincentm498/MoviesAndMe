const API_TOKEN = "8a4e9561e8047f9a9624db2949278ab8"

export function getFilmsFromApiWithSearchedText (text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + '&page=' + page
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
  }

  export function getImageFromApi(name){
    return 'https://image.tmdb.org/t/p/w300' + name
  }