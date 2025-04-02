import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import MovieGrid from './components/MovieGrid'
import MovieDetailsPage from './pages/MovieDetailsPage'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <MovieGrid category="popular" />} />
        <Route
          path="/top-rated"
          render={() => <MovieGrid category="top-rated" />}
        />
        <Route
          path="/upcoming"
          render={() => <MovieGrid category="upcoming" />}
        />
        <Route
          path="/search/:query"
          render={({match}) => (
            <MovieGrid category="search" searchQuery={match.params.query} />
          )}
        />
        <Route path="/MovieDetailsPage/:id" component={MovieDetailsPage} />
      </Switch>
    </Router>
  )
}

export default App
