import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import TopRatedPage from './pages/TopRatedPage'
import UpcomingPage from './pages/UpcomingPage'
import SingleMoviePage from './pages/SingleMoviePage'
import SearchPage from './pages/SearchPage'

import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/top-rated" component={TopRatedPage} />
          <Route exact path="/upcoming" component={UpcomingPage} />
          <Route exact path="/movie/:id" component={SingleMoviePage} />
          <Route exact path="/search" component={SearchPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
