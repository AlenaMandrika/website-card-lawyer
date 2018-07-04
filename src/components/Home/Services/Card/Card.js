import React from 'react'
import { Link } from 'react-router-dom'

import FontIcon from 'material-ui/FontIcon'
const iconStyles = {
  top: 6,
  marginRight: -2,
  color: '#b24a3b'
}

function Card ({ card }) {
  return (
    <article className='card'>
      <div className='card-header'>
        <img src={card.image} alt={card.alt} />
      </div>
      <div className='card-body'>
        <h3 className='body-title'>{card.title}</h3>
        <p className='body-content'>{card.text}</p>
        <Link to={`/services/${card.title}`}>
          <button className='button button-primary'>
            <FontIcon className='material-icons' style={iconStyles}>keyboard_arrow_right</FontIcon>
            Більше
          </button>
        </Link>
      </div>
    </article>
  )
}

export default Card
