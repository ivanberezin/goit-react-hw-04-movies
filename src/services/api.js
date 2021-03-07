const baseURL = 'https://api.themoviedb.org/3';
const key = '217b5c8250c179bcdecc9c10ab84cf73';

const fetchShowDetails = showId => {                                        // show one movies details by id
  return fetch(`${baseURL}/movie/${showId}?api_key=${key}`).then(res => res.json());
};

const fetchMostPopularMovies = () => {
  return fetch(`${baseURL}/trending/movie/week?api_key=${key}`)
  .then(res => res.json())
  .then(movies => movies.results.map(movie => movie))
};

const fetchMoviesWithQuery = searchQuery => {                                 // search movies by request
  return fetch(`${baseURL}/search/movie?api_key=${key}&query=${searchQuery}`)
    .then(res => res.json())
    .then(movies => movies.results.map(movie => movie))
};

const fetchCast = (id) => {
  return fetch(`${baseURL}/movie/${id}/credits?api_key=${key}`)
  .then(res => res.json())
  .then(movie => movie.cast)
}

const fetchReviews = (id) => {
  return fetch(`${baseURL}/movie/${id}/reviews?api_key=${key}&page=1`)
  .then(res => res.json())
  .then(movie => movie.results)
}

export default { fetchShowDetails, fetchMoviesWithQuery, fetchMostPopularMovies, fetchCast, fetchReviews };
