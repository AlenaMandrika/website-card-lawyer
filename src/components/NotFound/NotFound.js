import React from 'react'

import FontIcon from 'material-ui/FontIcon';
const iconStyles = {
  top: 7,
  color: '#b24a3b',
  fontSize: 70
};

function NotFound () {
  return (
    <main id='not-found' style={{marginTop: 70}}>
      <FontIcon className="material-icons" style={iconStyles}>error_outline</FontIcon>
      <h2>Не знайдено</h2>
    </main>
  )

}

export default NotFound
