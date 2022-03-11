import './App.scss'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PageHeader from './Components/PageHeader'
import Home from './Components/Home/Home'
import Game from './Components/Game/Game'

function App() {
  return (
    <>
      <Router>
        <PageHeader />
        <Switch>
          <Route
            path='/'
            exact
            render={(routerProps) => <Home {...routerProps} />}
          />
          <Route
            path='/game'
            exact
            render={(routerProps) => <Game {...routerProps} />}
          />
          <Route
            path='/game/:id'
            render={(routerProps) => <Game {...routerProps} />}
          />
        </Switch>
      </Router>
    </>
  )
}

export default App
