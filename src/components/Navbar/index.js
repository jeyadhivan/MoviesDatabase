import {useState} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = e => {
    setSearchQuery(e.target.value)
  }

  return (
    <nav className="navbar">
      <h1>movieDB</h1>
      <Link to="/">Popular</Link>
      <Link to="/top-rated">Top Rated</Link>
      <Link to="/upcoming">Upcoming</Link>
      <input
        type="text"
        placeholder="Search for movies"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <Link to={`/search/${searchQuery}`}>
        <button type="button">Search</button>
      </Link>
    </nav>
  )
}

export default Navbar
