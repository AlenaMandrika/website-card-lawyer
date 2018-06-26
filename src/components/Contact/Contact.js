import React, { Component } from 'react'

import Header from '../common/Header/Header'
import Contacts from '../Home/Contacts/Contacts'
import Footer from '../common/Footer/Footer'

let Contact = () => {
  return (
    <div>
      <Header />
      <div className='branchLaw-title'>
        <h2>КОНТАКТИ</h2>
      </div>
      <Contacts />
      <Footer />
    </div>
  )
}

export default Contact

