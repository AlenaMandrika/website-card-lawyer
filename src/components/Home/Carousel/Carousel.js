import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom'
import './Carousel.css'

import ggg from '../../../assets/images/ggg.jpg'
import hhh from '../../../assets/images/hhh.jpg'

class MyCarousel extends Component {
  constructor(props) {
    super(props)

    this.photos = [
      {
        name : ggg,
        legend: 'Юридичні консультації без вихідних',
        title: 'Адвокатське бюро Заруби Світлани',
        buttonText: 'Більше',
        alt: ''
      },
      {
        name : ggg,
        legend: 'Попередня консультація — безкоштовна!',
        title: 'Завжди дамо цінну пораду',
        buttonText: 'Більше',
        alt: ''
      },
      {
        name : ggg,
        legend: 'Довіряйте вирішення Ваших проблем саме Нам!',
        title: '"Справедливий світ, в якому цінується повага до людської гідності"',
        buttonText: 'Більше',
        alt: ''
      },
      {
        name : hhh,
        legend: '',
        title: '',
        alt: ''
      }
    ];

    this.renderHeader = this.renderHeader.bind(this)
  }
  renderHeader() {
    return (
      <Carousel autoPlay showThumbs={false} showStatus={false} transitionTime={2000}>
        {this.photos.map(function (photo, index) {
          console.log(photo)
          return (
            <div className='item' key={index}>
              <img className='img-item' src={photo.name} alt={photo.alt}/>
              <div className='block-text-carousel'>
                <p className="legend">{photo.legend}</p>
                <h2 className="title-item">{photo.title}</h2>
                <p className="title-text">{photo.text}</p>
                <NavLink to='/about' className="btn-link">{photo.buttonText}</NavLink>
              </div>
            </div>
          )
        }) }
      </Carousel >
    )
  }
  render () {
    return (
      <section>
        {this.renderHeader()}
      </section>
    )
  }
}

export default MyCarousel
