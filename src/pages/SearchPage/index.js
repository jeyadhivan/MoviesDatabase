import {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import MovieList from '../../components/MovieList'
import Header from '../../components/Header'

const apiKey = '744baf66a0b8b385b30b023362d286aa'

const SearchPage = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const location = useLocation()
  const query = new URLSearchParams(location.search).get('query')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1`,
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
  }, [query])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <Header />

      <MovieList movies={movies} />
    </div>
  )
}

export default SearchPage
