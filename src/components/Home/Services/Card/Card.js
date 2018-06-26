import React, { Component } from 'react'
import CardBody from './CardBody/CardBody'

class Card extends Component {
  render () {
    return (
      <article className='card'>
        <div className="card-header">
          <img src={this.props.details.image} />
        </div>
        <CardBody title={this.props.details.title}
                  text={this.props.details.text}
        />
      </article>
    )
  }
}

export default Card
