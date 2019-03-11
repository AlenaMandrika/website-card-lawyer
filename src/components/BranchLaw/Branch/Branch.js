import React from 'react'

import Header from '../../common/Header/Header'
import Footer from '../../common/Footer/Footer'
import FontIcon from 'material-ui/FontIcon'
import { CardsData } from '../../../constants/serviceData'

import info from '../../../assets/images/info.pdf'

const iconStyles = {
  top: 6,
  marginRight: 5
}
function Branch ({match}) {
  const branchLaw = CardsData.find(branchLaw => branchLaw.title === match.params.branch)
  return (
    <div>
      <Header />
      <section className='branch-section font'>
        <div className='branchLaw-title'>
          <h5 className='branch-title'>{branchLaw.title}</h5>
        </div>
        <div className='info-block-branch container'>
          <div className='img-branch'>
            <img src={branchLaw.image} alt={branchLaw.alt} />
          </div>
          <div className='info-branch'>
            <div className='contact-info-wrap wrap-branch'>
              <div className='block-tel tel-branch'>
                <h6><FontIcon className='material-icons' style={iconStyles}>phone</FontIcon>
                  Телефон</h6>
                <a href='tel:0630574485'>063-057-44-85</a>
                <a href='tel:0993278727'>099-327-87-27</a>
              </div>
              <div className='icon-contact email-branch'>
                <h6><FontIcon className='material-icons' style={iconStyles}>mail_outline</FontIcon>
                  Електронна пошта</h6>
                <a href='mailto:ab.s.zaruba@gmail.com'>ab.s.zaruba@gmail.com</a>
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
        <a className='hover-link' href={info} target='blank'>{branchLaw.textBtn}</a>
      </section>
      <Footer />
    </div>
  )
}

export default Branch
