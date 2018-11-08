import React, { Component } from 'react'
import './Servises.css'
import Slider from 'react-slick'

import Title from './Title/Title'
import Card from './Card/Card'

import { CardsData } from '../../../constants/serviceData'

class Services extends Component {
  render () {
    let settings = {
      dots: true,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      speed: 3000,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            speed: 2000,
            arrows: true,
            slidesToShow: 2.5,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 998,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 775,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 750,
          settings: {
            speed: 500,
            slidesToShow: 1.5,
            slidesToScroll: 1.5
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    }
    return (
      <section className='services-block font'>
        <div className='container card-wrap'>
          <Title />
          <div className='app-card-list'>
            <Slider className='slider' {...settings}>
              {CardsData.map((card, index) =>
                <Card key={index} card={card} />
              )}
            </Slider>
          </div>
        </div>
      </section>
    )
  }
}

export default Services
