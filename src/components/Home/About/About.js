import React from 'react'
import './About.css'

import icon1 from '../../../assets/images/icon4.png'
import icon2 from '../../../assets/images/icon5.png'
import icon3 from '../../../assets/images/icon7.png'


const About = () => (
  <section className='about'>
    <div className='wrap-about'>
      <div className='block-img'>
        <div className='img'>
        </div>
      </div>
    </div>
    <div className='block-info'>
      <div className="app-title title-about">
        <div>
          <h2 className='title'>АДВОКАТСЬКЕ БЮРО</h2>
        </div>
      </div>
      <div className='block-content'>
        <div className='about-icon'>
          <img src={icon1} alt='icon'/>
        </div>
        <div className='text-content'>
          <h5>НАША ІСТОРІЯ</h5>
          <p>Практичний досвід роботи в юриспруденції з 2009 року</p>
        </div>
      </div>
      <div className='block-content'>
        <div className='about-icon'>
          <img src={icon2} alt='icon'/>
        </div>
        <div className='text-content'>
          <h5>НАША МІСІЯ</h5>
          <p>Ми зробимо все можливе для вирішення суперечки на Вашу користь</p>
        </div>
      </div>
      <div className='block-content'>
        <div className='about-icon'>
          <img src={icon3} alt='icon'/>
        </div>
        <div className='text-content'>
          <h5>НАШЕ БАЧЕННЯ</h5>
          <p>Ідентичних справ не буває</p>
        </div>
      </div>
    </div>
  </section>
)

export default About
