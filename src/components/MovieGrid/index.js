// src/components/MovieGrid.js

import {useEffect, useState} from 'react'
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  searchMovies,
} from '../../services/api'

import MovieCard from '../MovieCard'

import './index.css'

const MovieGrid = ({category, searchQuery}) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      let fetchedMovies = []
      if (category === 'popular') {
        fetchedMovies = await getPopularMovies()
      } else if (category === 'top-rated') {
        fetchedMovies = await getTopRatedMovies()
      } else if (category === 'upcoming') {
        fetchedMovies = await getUpcomingMovies()
      } else if (category === 'search') {
        fetchedMovies = await searchMovies(searchQuery)
      }
      setMovies(fetchedMovies)
    }

    fetchMovies()
  }, [category, searchQuery])

  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MovieGrid
