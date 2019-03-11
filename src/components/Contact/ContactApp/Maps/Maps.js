import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { compose, withStateHandlers } from 'recompose'

import FontIcon from 'material-ui/FontIcon'
const iconStyles = {
  color: '#b24a3b'
}

const MyMapComponent = compose(
  withStateHandlers(() => ({
    isOpen: false
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{lat: 49.445, lng: 32.061}}
  >
    <Marker
      position={{lat: 49.44148519, lng: 32.06273267}}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
        <div>
          <FontIcon className='material-icons' style={iconStyles}>place</FontIcon>
          <h6>Адвокатське бюро Світлани Заруби</h6>
          <p style={{marginBottom: 0}}>місто Черкаси</p>
          <p style={{marginBottom: 0}}>бул. Шевченка 242/1, оф.108</p>
        </div>
      </InfoWindow>}
    </Marker>
  </GoogleMap>
);


export default MyMapComponent
