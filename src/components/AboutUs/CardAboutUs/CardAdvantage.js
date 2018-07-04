import React from 'react'

import law from '../../../assets/images/International-Law.png'

function CardAdvantage (props) {
  return (
    <article className='card card-benefits card-branchLaw'>
      <div className='card-header-benefits'>
        <img src={law} alt='law' />
      </div>
      <div className='card-body'>
        <h3 className='body-title'>{props.title}</h3>
        <p className='body-content'>{props.text}</p>
      </div>
    </article>
  )
}

export default CardAdvantage
