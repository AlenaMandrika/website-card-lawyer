import React from 'react'

import Header from '../../common/Header/Header'
import Footer from '../../common/Footer/Footer'
import { CardsData } from '../../../constants/serviceData'

function Branch ({match}) {
  const branchLaw = CardsData.find(branchLaw => branchLaw.title === match.params.branch)
  return (
    <div>
      <Header />
      <section>
        <h5>{branchLaw.title}</h5>
        <img src={branchLaw.image} />
        <p>{branchLaw.description}</p>
      </section>
      <Footer />
    </div>
  )
}

export default Branch
