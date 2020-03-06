import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './styles.css'

import HomePage from './components/HomePage'
import NotFound from './components/NotFound'

const App: React.FC = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
