import MovieCard from '../MovieCard'

const MovieList = props => {
  const {movies} = props
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MovieList
