import React, {Component} from 'react'
import {Link} from 'react-router'
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

  render() {

      return (
        <div className="navbar">
          <div className="syllabus-logo">
            <Link to="/">{SVGEduPortalLogo()}</Link>
          </div>
          <div className="menu" ref="menu">
            <div ref='menuContent' id='menuContent' className="menu-content">
              <ul>
                <li ref="home" id='menuContent'><Link to="/">Home</Link></li>
                <li id='menuContent'><Link target="_blank" to="">Features</Link></li>
                <li id='menuContent'><Link target="_blank" to="">Contact</Link></li>
              </ul>
            </div>
          </div>

        </div>
      )
  }
}

export default NavBar
