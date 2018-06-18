import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import { Route, Switch } from 'react-router'
import { HashRouter } from 'react-router-dom'

import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs'
import Contacts from './components/Home/Contacts/Contacts'
import Attorney from './components/Home/Attorney/Attorney'
// import Services from './components/Home/Services/Services'

import BranchLaw from './components/BranchLaw/BranchLaw'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home/' component={Home} />
            <Route path='/about/' component={AboutUs} />
            <Route path='/contacts/' component={Contacts} />
            <Route path='/attorney/' component={Attorney} />
            {/*<Route path='/services/' component={Services} />*/}

            <Route path='/services/' component={BranchLaw} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
