import React from 'react'
import './Works.css'

import FontIcon from 'material-ui/FontIcon';
const iconStyles = {
  top: 6,
  color: 'white',
  fontSize: 45
};
// import icon1 from '../../../assets/images/icon4.png'
// import icon2 from '../../../assets/images/icon5.png'
// import icon3 from '../../../assets/images/icon7.png'


const Works = () => (
  <section className='section-works'>
    <div className='wrap-works'>
      <div className='block-img-works'>
        <div className='img-works'>
          <div className='container'>
            <div className='wrap-works-content'>
              <div className="block-info-works">
                <h2 className='title-works'>ЯК МИ ПРАЦЮЄМО</h2>
              </div>
              <div className='block-steps'>
                <div className='step-text'>
                  <FontIcon className="material-icons icon-works" style={iconStyles}>message</FontIcon>
                  <h5 className='title-info-text'>ПИТАННЯ ЗАПИТУ</h5>
                  <p>Клієнт у письмовій формі або електронною поштою ставить питання</p>
                </div>
                <div className='step-text'>
                  <FontIcon className="material-icons icon-works" style={iconStyles}>search</FontIcon>
                  <h5 className='title-info-text'>ДОСЛІДЖЕННЯ СПРАВИ</h5>
                  <p>Через обговорений час клієнт одержує письмовий документ, що містить відповіді на поставлені питання</p>
                </div>
                <div className='step-text'>
                  <FontIcon className="material-icons icon-works" style={iconStyles}>account_balance</FontIcon>
                  <h5 className='title-info-text'>СПРАВЕДЛИВЕ РІШЕННЯ</h5>
                  <p>З усіх можливих способів обирає оптимальний, для позитивного вирішення справи</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Works
