import React, { Component } from 'react'

import Header from '../common/Header/Header'
import MyCarousel from './Carousel/Carousel'
import Servises from './Services/Services'
import About from './About/About'
import Ticker from './Ticker/Ticker'
import Works from './Works/Works'
import ContactHome from './ContactHome/ContactHome'
import Attorney from './AttorneyHome/AttorneyHome'
import Footer from '../common/Footer/Footer'

class Home extends Component {
  render () {
    return (
      <div>
        <Header />
        <MyCarousel />
        <Servises />
        <About />
        <Ticker />
        <Works />
        <Attorney />
        <ContactHome />
        <Footer />
      </div>
    )
  }
}

export default Home
