import React from 'react'

function CommandsAbout (props) {
  return (
    <article className='commands card card-benefits card-branchLaw'>
      <div className='card-header-benefits photo'>
        <img className='img' src={props.photo} alt='law' />
      </div>
      <div className='card-body'>
        <h3 className='body-title commands-title'>{props.title}</h3>
        <p className='body-content commands-text'>{props.text}</p>
      </div>
    </article>
  )
}

export default CommandsAbout
