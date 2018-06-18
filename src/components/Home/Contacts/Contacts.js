import React from 'react'
import './Contacts.css'
import FontIcon from 'material-ui/FontIcon';
import MyMapComponent from './Maps/Maps'

// import Header from '../../common/Header/Header'
// import Footer from '../../common/Footer/Footer'

const iconStyles = {
  top: 6,
  color: 'white',
  backgroundColor: '#b24a3b',
  padding: 5,
  borderRadius: 18,
  marginRight: 5
};

const Contacts = (props) => (
    <section className='section-contacts'>
      <div className="app-title-contact">
        <div className="app-title-content-contact">
          <h2 className='title-contact title'>КОНТАКТИ</h2>
          <h5>ОФІС В САМОМУ ЦЕНТРІ МІСТА ЧЕРКАС</h5>
        </div>
      </div>
      <div className='block-section-contact'>
        <div className='block-info-contact'>
          <div className='contact-info'>
            <div className='wrap'>
              <div>
                <h4>РОЗПОРЯДОК РОБОТИ:</h4>
                <p>Понеділок-П'ятниця: 09-20</p>
                <p>Субота: 09-18</p>
                <p>Неділя: вихідний</p>
              </div>
              <div className='contact-info-wrap'>
                <div className='block-tel'>
                  <h6><FontIcon className="material-icons" style={iconStyles}>phone</FontIcon>
                    Телефон</h6>
                  <a href='tel:067-144-53-31'>067-144-53-31</a>
                  <a href='tel:063-157-44-85'>063-157-44-85</a>
                </div>
                <div className='icon-contact'>
                  <h6><FontIcon className="material-icons" style={iconStyles}>mail_outline</FontIcon>
                    Електронна пошта</h6>
                  <a href='mailto:sozaruba@gmail.com'>sozaruba@gmail.com</a>
                </div>
                <div>
                  <h6><FontIcon className="material-icons" style={iconStyles}>schedule</FontIcon>Години роботи</h6>
                  <p >Понеділок-П'ятниця: 09-20</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='block-maps'>
          <div className='maps'>
            <MyMapComponent
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCCk2DXA6GfD37wt7EU4pXs40-M8fY9kjI&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `450px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
      </div>
    </section>
)

export default Contacts
