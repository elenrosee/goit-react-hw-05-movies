const KEY = "357b0f432d66a0bd560e276035046b29";
const BASE_URL = "https://api.themoviedb.org/3/";

//fetch(`${BASE_URL}api_key=${KEY}`)

async function fetchWithErrorHandling(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchTrendingMovie(query, period) {
  return fetchWithErrorHandling(
    `${BASE_URL}trending/${query}/${period}?api_key=${KEY}`
  );
}

export function fetchMovieById(movieId) {
  return fetchWithErrorHandling(`${BASE_URL}movie/${movieId}?api_key=${KEY}`);
}

export function fetchMovieByName(request) {
  return fetchWithErrorHandling(
    `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${request}&page=1&include_adult=false`
  );
}

export function fetchMovieCastById(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
}

export function fetchMovieReviewsById(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
}
