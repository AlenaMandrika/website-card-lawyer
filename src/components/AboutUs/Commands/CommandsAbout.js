import React from 'react'

function CommandsAbout (props) {
  return (
    <article className='commands'>
      <div className='commands-photo'>
        <img className='img' src={props.photo} alt='law' />
      </div>
      <div className='commands-body'>
        <h3 className='commands-title'>{props.title}</h3>
        <p className='commands-text'>{props.text}</p>
      </div>
    </article>
  )
}

export default CommandsAbout
