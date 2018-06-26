import React, { Component } from 'react'

import law from '../../../assets/images/International-Law.png'

class CardAdvantage extends Component {
  render () {
    return (
      <article className='card card-benefits card-branchLaw'>
        <div className='card-header-benefits'>
          <img src={law} />
        </div>
        <div className='card-body'>
          <h3 className='body-title'>{this.props.details.title}</h3>
          <p className='body-content'>{this.props.details.text}</p>
        </div>
      </article>
    )
  }
}

export default CardAdvantage
