import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Header from '../../components/Header'
import './index.css'

const apiKey = '744baf66a0b8b385b30b023362d286aa'

const SingleMoviePage = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)
  const [cast, setCast] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`,
        )
        const movieData = await movieResponse.json()
        setMovie(movieData)

        const castResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`,
        )
        const castData = await castResponse.json()
        setCast(castData.cast)

        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }
    fetchMovieDetails()
  }, [id])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <Header />
      <div className="movie-details-container">
        <section className="movie-details">
          <h2>{movie.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <p>
            <strong>Rating:</strong> {movie.vote_average}
          </p>
          <p>
            <strong>Duration:</strong> {movie.runtime} mins
          </p>
          <p>
            <strong>Genre:</strong> {movie.genres.map(g => g.name).join(', ')}
          </p>
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Overview:</strong> {movie.overview}
          </p>
        </section>
        <section className="cast-details">
          <h3>Cast</h3>
          <div className="cast-list">
            {cast.map(member => (
              <div key={member.cast_id} className="cast-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
                  alt={member.name}
                />
                <p>
                  <strong>{member.name}</strong>
                </p>
                <p>{member.character}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default SingleMoviePage
