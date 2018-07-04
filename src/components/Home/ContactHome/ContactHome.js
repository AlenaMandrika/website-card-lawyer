import React from 'react'
import './ContactHome.css'

import FontIcon from 'material-ui/FontIcon'

const iconStyles = {
  top: 6,
  marginRight: 5
}

const ContactHome = (props) => (
  <section className='section-contactHome'>
    <div className='app-title-contact'>
      <div className='app-title-content-contact container'>
        <h2 className='title-contact title'>КОНТАКТИ</h2>
        <h5>ОФІС В САМОМУ ЦЕНТРІ МІСТА ЧЕРКАС</h5>
      </div>
    </div>
    <div className='block-section-contact'>
      <div className='block-info-contactHome'>
        <div className='contact-info  container'>
          <div className='wrap'>
            <div>
              <h4>РОЗПОРЯДОК РОБОТИ:</h4>
              <p>Понеділок-П'ятниця: 09-20</p>
              <p>Субота: 09-18</p>
              <p>Неділя: вихідний</p>
            </div>
            <div className='contact-info-wrap'>
              <div className='block-tel'>
                <h6><FontIcon className='material-icons' style={iconStyles}>phone</FontIcon>
                  Телефон</h6>
                <a href='tel:067-144-53-31'>067-144-53-31</a>
                <a href='tel:063-157-44-85'>063-157-44-85</a>
              </div>
              <div className='icon-contact'>
                <h6><FontIcon className='material-icons' style={iconStyles}>mail_outline</FontIcon>
                  Електронна пошта</h6>
                <a href='mailto:sozaruba@gmail.com'>sozaruba@gmail.com</a>
              </div>
              <div>
                <h6><FontIcon className='material-icons' style={iconStyles}>schedule</FontIcon>Години роботи</h6>
                <p >Понеділок-П'ятниця: 09-20</p>
              </div>
            </div>
          </div>
        </div>
        <div className='address-block container hvr-grow'>
          <div className='address-text'>
            <FontIcon className='material-icons'>place</FontIcon>
            <h6>Адвокатське бюро Заруби Світлани</h6>
            <p>місто Черкаси</p>
            <p>бул. Шевченка 242/1, оф.108</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ContactHome
