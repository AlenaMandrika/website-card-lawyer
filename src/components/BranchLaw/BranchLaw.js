import React from 'react'
import './BranchLaw.css'

import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import CardBranchLaw from './CardBranchLaw/CardBranchLaw'

import { CardsData } from '../../constants/serviceData'

function BranchLaw () {
  return (
    <div>
      <Header />
      <section>
        <div className='branchLaw-title'>
          <h2>НАША ПРАКТИКА</h2>
        </div>
        <div className='block-branchLaw'>
          <div className='container card-wrap'>
            <div className='app-card-list card-list-branchLaw'>
              {CardsData.map((branchLaw, index) =>
                <CardBranchLaw key={index} branchLaw={branchLaw} />
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default BranchLaw
