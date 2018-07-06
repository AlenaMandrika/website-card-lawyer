import React from 'react'
import './Contact.css'

import Header from '../common/Header/Header'
import Contacts from './ContactApp/ContactApp'
import Footer from '../common/Footer/Footer'

let Contact = () => {
  return (
    <div>
      <Header />
      <div className='branchLaw-title font'>
        <h2>КОНТАКТИ</h2>
      </div>
      <div className='titleBlock font'>
        <Contacts />
      </div>
      <Footer />
    </div>
  )
}

export default Contact
