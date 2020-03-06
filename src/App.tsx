import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles.css'

import HomePage from './pages/HomePage'
import SplitView from './pages/SplitView'
import NotFound from './pages/NotFound'

const App: React.FC = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/split-view">
            <SplitView />
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
