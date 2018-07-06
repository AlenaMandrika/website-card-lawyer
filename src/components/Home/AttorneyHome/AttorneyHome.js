import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './AttorneyHome.css'

class Attorney extends Component {
  render () {
    return (
      <div className='block-attorney font'>
        <div className='container card-wrap'>
          <div className='app-card-list card-list-attorney'>
            <article className='card'>
              <div className='card-body card-attorney'>
                <div className='attorney-info'>
                  <h3 className='body-title title-attorney'>Адвокат Заруба Світлана</h3>
                  <p className='body-content'>Свідоцтво про право на заняття
                    адвокатською діяльністю видане
                    Радою адвокатів Черкаської області
                    Серія ЧК № 000731 від 01.03.2017
                    року</p>
                  <p className='quote'>"Найважливіший мій принцип – це відданість інтересам клієнтів. Із
                    власного досвіду знаю, наскільки важливою для забезпечення стабільності
                    та успіху в діловому середовищі України є якість юридичної підтримки.
                    Саме тому зосереджую свою діяльність на наданні фахової правничої
                    допомоги у найкоротші строки та на гнучких умовах, що забезпечує
                    досягнення клієнтами стратегічних цілей."</p>
                  <Link to={'/attorney'}><button className='button-primary btn-branchLaw'>Більше</button></Link>
                </div>
                <div className='wrap-aboutUs'>
                  <div className='block-img'>
                    <div className='img'>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    )
  }
}

export default Attorney
