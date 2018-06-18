import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css'

import ggg from '../../../assets/images/ggg.jpg'
import hhh from '../../../assets/images/hhh.jpg'

class MyCarousel extends Component {
  constructor(props) {
    super(props);

    this.photos = [
      {
        name : ggg,
        legend: 'Юридичні консультації без вихідних',
        title: 'Адвокатське бюро Заруби Світлани',
        // text: 'Попередня консультація — безкоштовна! Завжди дам цінну пораду!',
        buttonText: 'Більше',
        alt: 'туман'
      },
      {
        name : ggg,
        legend: 'лрморпсмрпасрпа',
        title: 'HELLO',
      },
      {
        name : ggg,
        legend: 'лорпорпморпмо',
        title: 'HELLO',
      },
      {
        name : hhh,
        legend: 'орпапарпа',
        title: 'HELLO',
      }
    ];

    this.renderHeader = this.renderHeader.bind(this)
  }
  renderHeader() {
    return (
      <Carousel showThumbs={false} showStatus={false} transitionTime={2000}>
        {this.photos.map(function(photo, index) {
          console.log(photo)
          return (
            <div className='item' key={index}>
              <img className='img-item' src={photo.name} alt={photo.alt}/>
              <p className="legend">{photo.legend}</p>
              <h2 className="title-item">{photo.title}</h2>
              <p className="title-text">{photo.text}</p>
              <a href='#' className="btn-link">{photo.buttonText}</a>
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
