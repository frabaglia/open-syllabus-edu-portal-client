import React, {Component} from 'react'
import {Link} from 'react-router'
import ButtonLabel from '../Buttons/ButtonLabel/component'
import './component.sass'

import SVGEduPortalLogo from '../SVG/EduPortalLogo/component.js'
import SVGConfigIcon from '../SVG/ConfigIcon/component.js'

class NavBar extends Component {

  constructor(){
    super();
    this.state = {
      isLoggedIn: false,
    }
  }

  // componentDidMount()
  // {
  //   if(this.props.router.location.pathname === '/') this.refs.home.className = 'home-active'
  //   else this.refs.home.className = ''
  // }

  // componentWillReceiveProps = (nextProps) =>{
  //   if(nextProps.router.location.pathname === '/') this.refs.home.className = 'home-active'
  //   else this.refs.home.className = ''
  // }

  login = () =>{
    this.props.router.router.push('login')
  }

  logout = () =>{
    this.props.router.router.push('/')
  }

  renderNavBar = () =>{
    return (this.props.router.location.pathname !== '/') ?
    (
      <div className="navbar">
        <div className="edu-logo">
          <Link to="/">{SVGEduPortalLogo({color:'#9BD331', colorEDU:'#FFFFFF'})}</Link>
        </div>
        <div className="navbar-menu">
              {ButtonLabel({
                backgroundColor:'#9BD331',
                color:'#FFFFFF',
                border: '#9BD331',
                title: 'Logout',
                click: this.logout
              })}
              {SVGConfigIcon()}
        </div>
      </div>
    ):
    (
      <div className="navbar">
        <div className="edu-logo">
          <Link to="/">{SVGEduPortalLogo({color:'#9BD331', colorEDU:'#3B475B'})}</Link>
        </div>
        <div className="navbar-menu">
            <ul>
              <li><Link to="/" style={{color:'#9BD331'}}>Home</Link></li>
              <li><Link target="_blank" to="">Features</Link></li>
              <li><Link target="_blank" to="">Contact</Link></li>
            </ul>
              {ButtonLabel({
                backgroundColor:'#9BD331',
                color:'#FFFFFF',
                border: '#9BD331',
                title: 'University Login',
                click: this.login
              })}
        </div>
      </div>
    )
  }

  render() {
    console.log(this.props);
      return (this.renderNavBar())
  }
}

export default NavBar
