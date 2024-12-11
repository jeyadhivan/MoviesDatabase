import {useEffect, useState} from 'react'
import MovieList from '../../components/MovieList'
import Header from '../../components/Header'

const apiKey = '744baf66a0b8b385b30b023362d286aa'

const HomePage = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
        )
        const data = await response.json()
        setMovies(data.results)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <Header />

      <MovieList movies={movies} />
    </div>
  )
}

export default HomePage
