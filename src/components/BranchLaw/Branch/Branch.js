import React from 'react'

import Header from '../../common/Header/Header'
import Footer from '../../common/Footer/Footer'
import FontIcon from 'material-ui/FontIcon'
import { CardsData } from '../../../constants/serviceData'

const iconStyles = {
  top: 6,
  marginRight: 5
}

function Branch ({match}) {
  const branchLaw = CardsData.find(branchLaw => branchLaw.title === match.params.branch)
  return (
    <div>
      <Header />
      <section className='branch-section'>
        <div className='branchLaw-title'>
          <h5 className='branch-title'>{branchLaw.title}</h5>
        </div>
        <div className='info-block-branch container'>
          <div className='img-branch'>
            <img src={branchLaw.image} />
          </div>
          <div className='info-branch'>
            <div className='contact-info-wrap wrap-branch'>
              <div className='block-tel tel-branch'>
                <h6><FontIcon className='material-icons' style={iconStyles}>phone</FontIcon>
                  Телефон</h6>
                <a href='tel:067-144-53-31'>067-144-53-31</a>
                <a href='tel:063-157-44-85'>063-157-44-85</a>
              </div>
              <div className='icon-contact email-branch'>
                <h6><FontIcon className='material-icons' style={iconStyles}>mail_outline</FontIcon>
                  Електронна пошта</h6>
                <a href='mailto:sozaruba@gmail.com'>sozaruba@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className='description container'>
          <p className='text-description'>{branchLaw.description}</p>
          <ul>
            <li className='item-list'>
              <p>{branchLaw.paragraph1}</p>
            </li>
            <li className='item-list'>
              <p>{branchLaw.paragraph2}</p>
            </li>
            <li className='item-list'>
              <p>{branchLaw.paragraph3}</p>
            </li>
            <li className='item-list'>
              <p>{branchLaw.paragraph4}</p>
            </li>
            <li className='item-list'>
              <p>{branchLaw.paragraph5}</p>
            </li>
            <li className='item-list'>
              <p>{branchLaw.paragraph6}</p>
            </li>
            <li className='item-list'>
              <p>{branchLaw.paragraph7}</p>
            </li>
            <li className='item-list'>
              <p>{branchLaw.paragraph8}</p>
            </li>
            <li className='item-list'>
              <p>{branchLaw.paragraph9}</p>
            </li>
            <li className='item-list'>
              <p>{branchLaw.paragraph10}</p>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Branch
