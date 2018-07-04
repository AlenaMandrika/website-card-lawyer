import React from 'react'
import './Attorney.css'

import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'

import certificate1 from '../../assets/images/certificate1.jpg'
import certificate from '../../assets/images/certificate.jpg'
import certificate2 from '../../assets/images/certificate2.jpg'

function Attorney () {
  return (
    <div>
      <Header />
      <section>
        <div className='branchLaw-title'>
          <h2>ПРО МЕНЕ</h2>
        </div>
        <div className='container aboutUs-block'>
          <div className='wrap-aboutUs-info'>
            <div className='info-attorney'>
              <div className='text-default text-default-attorney'>
                <h2>Адвокат Світлана Заруба:</h2>
              </div>
              <div className='text-default text-default-attorney'>
                "СВОЮ діяльність у юриспруденції я почала ще в 2009 році.
                За цей час маю досвід вирішення багатьох справ у різних
                сферах законодавства. Займаюсь вирішенням господарських,
                цивільних, адміністративних, трудових, сімейних та інших
                спорів. Будую свою діяльність виключно на законних методах
                вирішення справ та невпинно поповнюю власні знання."
              </div>
              <div className='text-default text-default-attorney'>
                "НАДАЮ послуги по захисту прав і інтересів в судах, ведення
                 судових справ усіх категорій і виконання судових рішень,
                досудове врегулювання спорів і послуги з представництва
                інтересів у держорганах."
              </div>
            </div>
          </div>
          <div className='wrap-aboutUs'>
            <div className='block-img'>
              <div className='img'>
              </div>
            </div>
          </div>

        </div>
        <div className='certificate container'>
          <div className='wrap-img-certificate'>
            <div className='block-img-certificate'>
              <img className='img-certificate' src={certificate} alt='certificate' />
            </div>
            <div className='block-img-certificate'>
              <img className='img-certificate' src={certificate2} alt='certificate2' />
            </div>
          </div>
          <div className='block-img-certificate'>
            <img className='img-certificate' src={certificate1} alt='certificate1' />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Attorney
