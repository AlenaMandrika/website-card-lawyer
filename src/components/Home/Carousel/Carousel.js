import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Carousel.css'

import Slider from 'react-slick'

class MyCarousel extends Component {
  render () {
    let settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true
    }

    return (
      <Slider {...settings}>
        <div className='wrap-carousel font'>
          <div className='block-img-carousel'>
            <div className='img-item'>
            </div>
            <div className='block-text-carousel container'>
              <p className='legend-carousel'>Юридичні консультації без вихідних</p>
              <h2 className='title-item-carousel'>Адвокатське бюро Світлани Заруби</h2>
              <NavLink to='/about' className='btn-link-carousel'>Більше</NavLink>
            </div>
          </div>
        </div>
        <div className='wrap-carousel font'>
          <div className='block-img-carousel'>
            <div className='img-item1'>
            </div>
            <div className='block-text-carousel container'>
              <p className='legend-carousel'>Завжди дамо цінну пораду!</p>
              <h2 className='title-item-carousel'>Адвокатське бюро Світлани Заруби</h2>
              <NavLink to='/about' className='btn-link-carousel'>Більше</NavLink>
            </div>
          </div>
        </div>
      </Slider>
    )
  }
}
export default MyCarousel
