import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {getMovieDetails, getMovieCast} from '../../services/api'

const transformMovieData = movie => ({
  id: movie.id,
  title: movie.title,
  posterPath: movie.poster_path,
  voteAverage: movie.vote_average,
  overview: movie.overview,
})

const transformCastData = cast =>
  cast.map(actor => ({
    id: actor.id,
    name: actor.name,
    profilePath: actor.profile_path,
  }))

const MovieDetailsPage = () => {
  const {id} = useParams()

  const [movie, setMovie] = useState(null)
  const [cast, setCast] = useState([])

  useEffect(() => {
    const fetchDetails = async () => {
      const movieData = await getMovieDetails(id)

      const castData = await getMovieCast(id)

      setMovie(transformMovieData(movieData))
      setCast(transformCastData(castData))
    }
    fetchDetails()
  }, [id])

  if (!movie) return <div>Loading...</div>

  return (
    <div className="movie-details">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
        alt={movie.title}
      />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <h3>Cast</h3>
      <div className="cast-grid">
        {cast.map(actor => (
          <div key={actor.id} className="cast-member">
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profilePath}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieDetailsPage
