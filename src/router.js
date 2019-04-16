import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom"
import Login from './components/login'
import Home from './components/home'

function AppRouter () {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route path = "/login" component = {Login} />
        <Redirect to = "/" />
      </Switch>
    </Router>
  )
}

export default AppRouter
