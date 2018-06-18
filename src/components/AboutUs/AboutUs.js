import React, { Component } from 'react'
import FontIcon from 'material-ui/FontIcon';
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import './AboutUs.css'

import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'

import libra from '../../assets/images/flip-wooden.jpg'

const iconStyles = {
  color: '#b24a3b',
};


let Mission = () => {
  return (
    <div>
      <p>
        Давати можливість отримувати правову допомогу з широкого
        кола питань, у всіх сферах юридичної діяльності в зручний час без вихідних.
      </p>
      <ul>
        <li className='item'>
          <FontIcon className="material-icons" style={iconStyles}>done</FontIcon>
          <div>швидко та якісно надавати послуги по
            захисту прав і інтересів в судах
          </div>
        </li>
        <li className='item'>
          <FontIcon className="material-icons" style={iconStyles}>done</FontIcon>
          <div>підходити до кожної справи системно, тобто,
            перед тим, як приймати рішення та розробляти стратегію роботи,
            ми повністю вивчаємо всі подробиці справи та вибираємо правову позицію
          </div>
        </li>
        <li className='item'>
          <FontIcon className="material-icons" style={iconStyles}>done</FontIcon>
          <div>індивідуально і уважно підходити до проблеми кожного клієнта</div>
        </li>
      </ul>
    </div>
  )
}

let Vision = () => {
  return (
    <div>
      <p>
        jhgfchgfxhf
      </p>
      <ul>
        <li className='item'>
          <FontIcon className="material-icons" style={iconStyles}>done</FontIcon>
          <div>jgfchgfchgf
          </div>
        </li>
        <li className='item'>
          <FontIcon className="material-icons" style={iconStyles}>done</FontIcon>
          <div>gfhgfgfdxgf
          </div>
        </li>
        <li className='item'>
          <FontIcon className="material-icons" style={iconStyles}>done</FontIcon>
          <div>uygjgfjgf</div>
        </li>
      </ul>
    </div>
  )
}

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <div className={match ? "active" : ""}>
        {match ? '>> ' : ""}
        <Link to={to}>{label}</Link>
      </div>
    )}
  />
);

class AboutUs extends Component {
  constructor (props) {
    super(props)
    this.state = {
      url: props.match.url,
    }
  }
  render () {
    return (
      <div>
        <Header/>
        <section>
          <div className='branchLaw-title'>
            <h2>АДВОКАТСЬКЕ БЮРО</h2>
          </div>
          <div className='container aboutUs-block'>
            <div className='wrap-aboutUs-info'>
              <div className='info-aboutUs'>
                <div className='link-margin'>
                  <OldSchoolMenuLink activeOnlyWhenExact={true}
                                     to={this.state.url + "/mission"}
                                     className='link'
                                     label="НАША МІСІЯ">
                  </OldSchoolMenuLink>
                </div>
                <div className='link-margin'>
                  <OldSchoolMenuLink to={this.state.url + "/vision"}
                                     className='link'
                                     label="НАШЕ БАЧЕННЯ">
                  </OldSchoolMenuLink>
                </div>
              </div>
              <div>
                <Route path={this.state.url + "/mission"} component={Mission} />
                <Route path={this.state.url + "/vision"} component={Vision} />
                <Route
                  exact
                  path={this.state.url}
                  render={() =>
                    <div>
                      <div className='text-default'>
                        "Захист прав людини шляхом забезпечення
                        рівного доступу до правової інформації
                        та правосуддя, посилення правових можливостей і
                        правової спроможності представників соціально
                        вразливих груп, територіальних громад та спільнот".
                      </div>
                      <div className='libra'>
                        <img src={libra} alt='libra'/>
                      </div>
                    </div>
                  }
                />

              </div>
            </div>
            <div className='wrap-aboutUs'>
              <div className='block-img'>
                <div className='img'>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    )
  }
}

export default AboutUs;
