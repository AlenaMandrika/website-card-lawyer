import React, { Component } from 'react'
import './Header.css'
import { NavLink, Link } from 'react-router-dom'

import { slide as Menu } from 'react-burger-menu'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faFacebookF from '@fortawesome/fontawesome-free-brands/faFacebookF'
import FontIcon from 'material-ui/FontIcon';

import logo from '../../../assets/images/logo.png'

const iconStyles = {
  top: 6,
  marginRight: 8,
  color: '#36363a'
}

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }
  closeMenu () {
    this.setState({menuOpen: false})
  }

  render () {
    return (
      <div>
        <section className='section-block'>
          <div className='header-top'>
            <div className='container header-top-block'>
              <div className='head-nav-left'>
                <ul className='nav-left'>
                  <li>
                    <a href='mailto:sozaruba@gmail.com'>
                      <FontIcon className="material-icons" style={iconStyles}>mail_outline</FontIcon>
                      sozaruba@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href='tel:067-144-53-31'>
                      <FontIcon className="material-icons" style={iconStyles}>phone</FontIcon>
                      067-144-53-31
                    </a>
                  </li>
                  <li>
                    <a href='tel:063-157-44-85'>
                      063-157-44-85
                    </a>
                  </li>
                </ul>
              </div>
              <div className='head-nav-right'>
                <a target="_blank" href='https://www.facebook.com/advokat.zaruba.svitlana/?notif_id=1526913154442986&notif_t=page_invite'>
                  <FontAwesomeIcon icon={faFacebookF} size='1x'/>
                </a>
              </div>
            </div>
          </div>
          <div className='header-bottom'>
            <div className='container menu'>
              <div className='logo-block'>
                <Link to='/' className='logo-btn'>
                  <h2>АДВОКАТСЬКЕ</h2>
                  <div className='logo'>
                    <img src={logo} alt='logo'/>
                  </div>
                  <h2>БЮРО</h2>
                  <p className='logo-title'>ЗАРУБИ СВІТЛАНИ</p>
                </Link>
              </div>
              <div className='menu-btn nav nav-pills flex-row navWide'>
                <NavLink
                  onClick={() => this.closeMenu()}
                  to='/home'
                  className='nav-btn nav-link'
                >ГОЛОВНА</NavLink>
                <NavLink
                  onClick={() => this.closeMenu()}
                  to='/about'
                  className='nav-btn nav-link'
                >АДВОКАТСЬКЕ БЮРО</NavLink>
                <NavLink
                  onClick={() => this.closeMenu()}
                  to='/services'
                  className='nav-btn nav-link'
                >ПОСЛУГИ
                </NavLink>
                <NavLink
                  onClick={() => this.closeMenu()}
                  to='/attorney'
                  className='nav-btn nav-link'
                >ПРО МЕНЕ</NavLink>
                <NavLink
                  onClick={() => this.closeMenu()}
                  to='/contact'
                  className='nav-btn nav-link'
                >КОНТАКТИ</NavLink>
              </div>
              <div className='menu-btn nav nav-pills flex-row block-burger'>
                <Menu width={ '100%' } right isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
                  <NavLink
                    onClick={() => this.closeMenu()}
                    to='/home'
                    className='nav-btn nav-link'
                  >ГОЛОВНА</NavLink>
                  <NavLink
                    onClick={() => this.closeMenu()}
                    to='/about'
                    className='nav-btn nav-link'
                  >АДВОКАТСЬКЕ БЮРО</NavLink>
                  <NavLink
                    onClick={() => this.closeMenu()}
                    to='/services'
                    className='nav-btn nav-link'
                  >ПОСЛУГИ
                  </NavLink>
                  <NavLink
                    onClick={() => this.closeMenu()}
                    to='/attorney'
                    className='nav-btn nav-link'
                  >ПРО МЕНЕ</NavLink>
                  <NavLink
                    onClick={() => this.closeMenu()}
                    to='/contact'
                    className='nav-btn nav-link'
                  >КОНТАКТИ</NavLink>
                  <div align='center' className='header-top-burger'>
                    <ul>
                      <li><a onClick={() => this.closeMenu()} className='nav-btn nav-link' href='#'>sozaruba@gmail.com</a></li>
                      <li>
                        <a onClick={() => this.closeMenu()} className='nav-btn nav-link'href='#'>067-144-53-31
                        </a>
                      </li>
                      <li>
                        <a onClick={() => this.closeMenu()} className='nav-btn nav-link'href='#'>063-157-44-85
                        </a>
                      </li>
                      <li><a className='nav-btn nav-link' target="_blank" href='https://www.facebook.com/advokat.zaruba.svitlana/?notif_id=1526913154442986&notif_t=page_invite'>
                        <FontAwesomeIcon icon={faFacebookF} size='1x'/>
                      </a></li>
                    </ul>
                  </div>
                </Menu>
              </div>
              </div>
            </div>
        </section>
      </div>
    )
  }
}

export default Header
