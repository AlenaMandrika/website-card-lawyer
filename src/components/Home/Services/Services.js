import React, { Component } from 'react'
import './Servises.css'

import Title from './Title/Title'
import Card from './Card/Card'

import { CardsData  }  from '../../../constants/serviceData'

class Services extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: {}
    }
  }
  componentWillMount () {
    this.setState({
      cards: CardsData
    })
  }

  render () {
    return (
      <section className='services-block'>
        <div className='container card-wrap'>
          <Title />
          <div className="app-card-list">
            {
              Object.keys(this.state.cards).map(key =>
                <Card key={key.id} index={key.id} details={this.state.cards[key]} />)
            }
          </div>
        </div>
      </section>
    )
  }
}

export default Services
