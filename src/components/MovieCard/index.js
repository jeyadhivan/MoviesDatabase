import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = props => {
  const {movie} = props

  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>Rating: {movie.vote_average}</p>
      <Link to={`/movie/${movie.id}`}>
        <button type="button">View Details</button>
      </Link>
    </div>
  )
}

export default MovieCard
