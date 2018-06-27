import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

import { Route, Switch } from 'react-router'
import { HashRouter } from 'react-router-dom'

import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact'
import Attorney from './components/Attorney/Attorney'
import BranchLaw from './components/BranchLaw/BranchLaw'
import NotFound from './components/NotFound/NotFound'
import Branch from './components/BranchLaw/Branch/Branch'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <HashRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home/' component={Home} />
            <Route path='/about/' component={AboutUs} />
            <Route exact path='/services/' component={BranchLaw} />
            <Route path='/services/:branch' component={Branch} />
            <Route path='/attorney/' component={Attorney} />
            <Route path='/contact/' component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

export default App
