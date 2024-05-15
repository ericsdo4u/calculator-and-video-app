//https://api.themoviedb.org/3/movie/157336?api_key=5ee8f27402aa22b8b96429569b263e47


const API_KEY = "api_key=5ee8f27402aa22b8b96429569b263e47";
const API_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500"
const MOVIE_URL = `${API_URL}/popular?${API_KEY}`;
const SEARCH_URL = `${API_URL}/search/movie?${API_KEY}`;
console.log(MOVIE_URL);



const form =document.querySelector(".search")
const search = document.querySelector("#searchInput")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const searchValue = search.value;
    if(searchValue) {
        getMovies(SEARCH_URL + "&query=" + searchValue);
    }
    else {getMovies(API_URL)}
})




const getMovies = (url) =>{
    fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data.results);
            showMovies(data.results);
        })
        .catch((error)=> console.log(error))
}
getMovies(MOVIE_URL);
const movieContainer = document.querySelector(".movieContainer");

const showMovies = (movies) => {
    movies.forEach(movie => {
        const {title, overview,poster_path, vote_average} = movie;
        const divTag = document.createElement('div');
        divTag.classList.add("movieDetails");
        divTag.innerHTML = `
       
       <img src="${IMAGE_URL}${poster_path}.jpeg" alt=""> 
            <div class ="movieTitle">
                <p>${title}/p>
                <p>${vote_average}</p>
            </div>
            <h2>Overview</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus alias aspernatur beatae deserunt distinctio dolorem
                illum impedit labore nam necessitatibus nemo reiciendis, sapiente!
                Architecto fuga ipsam officiis quis soluta voluptatibus
            </p>
          `;
        movieContainer.appendChild(divTag)

    });
}