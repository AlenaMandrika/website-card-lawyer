import React, { Component } from 'react'
import { Route } from 'react-router'
import { NavLink } from 'react-router-dom'
import './BranchLaw.css'

import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import Commercial from './Commercial/Commercial'

let BranchLaw = (props) => {
    let url = props.match.url;
    return (
      <div>
        <Header />
        <section className='branchLaw-block'>
          <div className='branchLaw-title'>
            <h2>НАША ПРАКТИКА</h2>
          </div>
          <div>
            <ul>
              <li><NavLink style={{color: 'black'}} to="/group">Admin Group</NavLink></li>
              <li><NavLink to={url + "/user"}>Admin User</NavLink></li>
            </ul>
            <Route path="/group" component={Commercial} />
            <Route path={url + "/user"} component={Commercial} />
          </div>
        </section>
        <Footer />
      </div>
    )
}

export default BranchLaw;
