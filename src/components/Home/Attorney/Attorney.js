import React, { Component } from 'react'
import CardAdvantage from '../../AboutUs/CardAboutUs/CardAdvantage'

import './Attorney.css'

const CardsAttorney = [
  {
    "title": "Індивідуальний підхід:",
    "text": "hgjhgcgfxfdxfdszfdszfdszfdsz"
  }
]

class Attorney extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: {}
    }
  }

  componentWillMount() {
    this.setState({
      cards: CardsAttorney
    })
  }


  render () {
      return (
        <div className='block-attorney'>
            <div className='container card-wrap'>
                <div className="app-card-list card-list-attorney">
                  {
                    Object.keys(this.state.cards).map(key =>
                      <CardAdvantage style={{padding: '50px'}} key={key} index={key} details={this.state.cards[key]}/>)
                  }
                </div>
            </div>
        </div>
      )
  }
}

export default Attorney
