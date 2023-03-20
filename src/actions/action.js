import axios from 'axios';

const ApiKey = '312a24b1d253e34a113443764512cffd';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function getTranding() {
  return await axios.get(
    `${BASE_URL}trending/movie/week?api_key=${ApiKey}&language=en-US`
  );
}

export async function searchMovie(movieName) {
  return await axios.get(
    `${BASE_URL}search/movie?api_key=${ApiKey}&language=en-US&query=${movieName}&page=1`
  );
}

export async function getMovieDetails(id) {
  return await axios.get(
    `${BASE_URL}movie/${id}?api_key=${ApiKey}&language=en-US`
  );
}

export async function getMovieCredits(id) {
  return await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${ApiKey}&language=en-US`
  );
}

export async function movieReviews(id) {
  return await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${ApiKey}&language=en-US`
  );
}
