import React, {Component} from 'react'
import {Link} from 'react-router'
import ButtonLabel from '../Buttons/ButtonLabel/component'
import './component.sass'

import SVGEduPortalLogo from '../SVG/EduPortalLogo/component.js'

class NavBar extends Component {

  constructor(){
    super();
    this.state = {
      openMenu: false,
    }
  }

  componentDidMount()
  {
    if(this.props.router.location.pathname === '/') this.refs.home.className = 'home-active'
    else this.refs.home.className = ''
  }

  componentWillReceiveProps = (nextProps) =>{
    if(nextProps.router.location.pathname === '/') this.refs.home.className = 'home-active'
    else this.refs.home.className = ''
  }

  callLogin = () =>{

  }

  render() {

      return (
        <div className="navbar">
          <div className="edu-logo">
            <Link to="/">{SVGEduPortalLogo({color:'#9BD331'})}</Link>
          </div>
          <div className="navbar-menu">
              <ul>
                <li ref="home" id='menuContent'><Link to="/">Home</Link></li>
                <li id='menuContent'><Link target="_blank" to="">Features</Link></li>
                <li id='menuContent'><Link target="_blank" to="">Contact</Link></li>
              </ul>
                {ButtonLabel({
                  backgroundColor:'#9BD331',
                  color:'#FFFFFF',
                  border: '#9BD331',
                  title: 'University Login',
                  click: this.callLogin()
                })}
          </div>

        </div>
      )
  }
}

export default NavBar
