import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import FontIcon from 'material-ui/FontIcon';

const iconStyles = {
  top: 6,
  marginRight: -2,
  color: '#b24a3b',
};

class CardBody extends Component {
  render() {
    return (
      <div className="card-body">

        <h3 className='body-title'>{this.props.title}</h3>

        <p className="body-content">{this.props.text}</p>

        <Link to='/services/group'>
          <button className="button button-primary">
            <FontIcon className="material-icons" style={iconStyles}>keyboard_arrow_right</FontIcon>
            Більше
          </button>
        </Link>
      </div>
    )
  }
}

export default CardBody
