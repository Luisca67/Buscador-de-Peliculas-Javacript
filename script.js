document.getElementById("searchButton").addEventListener('click', searchMovies)

let api_key = '7fa2477535a1989768b190c76475ac0e'
let url_base = 'https://api.themoviedb.org/3/search/movie'
let url_img = 'https://image.tmdb.org/t/p/w400/'
//?query=Jack+Reacher&api_key=7fa2477535a1989768b190c76475ac0e'


function searchMovies(){
    let searchInput = document.getElementById("searchInput").value
    
    fetch(url_base + '?query=' + searchInput + '&api_key=' + api_key)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
    
}

function displayMovies(movies){
    let resultContainer = document.getElementById("results")
    resultContainer.innerHTML = ''

    if(movies.length === 0 ){
        resultContainer.innerHTML = '<p>No se encontro ninguna pelicula</p>'
        return
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let titulo = document.createElement('h2')
        titulo.textContent = movie.title

        let releaseDate = document.createElement('p')
        releaseDate.textContent = 'La fecha de lanzamiento es: ' + movie.release_date

        let overview = document.createElement('p')
        overview.textContent = movie.overview

        let posterPath = url_img + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(titulo)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)
       
        resultContainer.appendChild(movieDiv)
    });
}
