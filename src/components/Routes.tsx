import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../App'
import NotFound from './NotFound'

const Routes = (
  <Router>
    <Route path="/" exact component={App} />
    <Route path="*" component={NotFound} />
  </Router>
)

export default Routes
