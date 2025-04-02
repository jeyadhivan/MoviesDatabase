const API_KEY = '744baf66a0b8b385b30b023362d286aa'
const BASE_URL = 'https://api.themoviedb.org/3'

const fetchMovies = (url, params = {}) =>
  fetch(
    `${BASE_URL}${url}&api_key=${API_KEY}&language=en-US&${new URLSearchParams(
      params,
    )}`,
  )
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then(data => data.results)
    .catch(error => {
      console.error('Error fetching data:', error)
      return []
    })

// Get Popular Movies
export const getPopularMovies = () => fetchMovies('/movie/popular?', {page: 1})

// Get Top Rated Movies
export const getTopRatedMovies = () =>
  fetchMovies('/movie/top_rated?', {page: 1})

// Get Upcoming Movies
export const getUpcomingMovies = () =>
  fetchMovies('/movie/upcoming?', {page: 1})

// Get Single Movie Details

export const getMovieDetails = movieId => {
  const url = `/movie/${movieId}`
  const queryString = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  }).toString()
  return fetch(`${BASE_URL}${url}?${queryString}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .catch(error => {
      console.error('Error fetching movie details:', error)
      return null
    })
}
// getMovieCast
export const getMovieCast = movieId => {
  const url = `/movie/${movieId}/credits`
  const queryString = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  }).toString()
  return fetch(`${BASE_URL}${url}?${queryString}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = response.json()

      return data
    })
    .then(data => data.cast)
    .catch(error => {
      console.error('Error fetching movie cast:', error)
      return []
    })
}

// Search Movies
export const searchMovies = query =>
  fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`,
  )
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then(data => data.results)
    .catch(error => {
      console.error('Error searching movies:', error)
      return []
    })
