import React, { Component } from 'react'
import './Servises.css'

import Title from './Title/Title'
import Card from './Card/Card'

import { CardsData } from '../../../constants/serviceData'

class Services extends Component {
  render () {
    return (
      <section className='services-block'>
        <div className='container card-wrap'>
          <Title />
          <div className='app-card-list'>
            {CardsData.map((card, index) =>
              <Card key={index} card={card} />
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default Services
