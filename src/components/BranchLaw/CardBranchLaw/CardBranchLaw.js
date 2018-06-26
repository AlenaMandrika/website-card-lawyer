import React from 'react'

import { Link } from 'react-router-dom'

function CardBranchLaw ({ branchLaw }) {
  return (
    <article className='card card-branchLaw'>
      <div className='card-header-branchLaw'>
        <img src={branchLaw.image} />
        <div className='card-body card-body-branchLaw'>
          <h3 className='body-title'>{branchLaw.title}</h3>
          <Link to={`/services/${branchLaw.title}`} className='button button-primary btn-branchLaw'>
            Більше
          </Link>
        </div>
      </div>
    </article>
  )
}

export default CardBranchLaw
