import {useState} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <h1 className="logo">movieDB</h1>
      <nav className="navbar">
        <Link to="/">
          <h2>Popular</h2>
        </Link>
        <Link to="/top-rated">
          <h2>Top Rated</h2>
        </Link>
        <Link to="/upcoming">
          <h2>Upcoming</h2>
        </Link>

        <form>
          <input
            type="text"
            placeholder="Search movies..."
            aria-label="Search Movies"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <button type="button" aria-label="Search">
            Search
          </button>
        </form>
      </nav>
    </>
  )
}

export default Header
