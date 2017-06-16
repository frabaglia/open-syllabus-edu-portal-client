import React, {Component} from 'react'

import SVGEduPortalLogo from '../../Dummy/SVG/EduPortalLogo/component'
import SVGCloseIcon from '../../Dummy/SVG/CloseIcon/component'
import SVGUserIcon from '../../Dummy/SVG/UserIcon/component'
import SVGKeyIcon from '../../Dummy/SVG/KeyIcon/component'
import ButtonLabel from '../../Dummy/Buttons/ButtonLabel/component'

import './component.sass'

class DummyLogin extends Component {

  login = ( ) =>{
    console.log('login');
  }

  render() {
    return (
        <div className="fixed-container">
          <div className="centered-login">
            <div className="login">
              <div className="login-close">
                {SVGCloseIcon()}
              </div>
              <div className="login-header">
                {SVGEduPortalLogo({color:'#9BD331', colorEDU:'#3B475B'})}
              </div>
              <div className="login-body">
                <div className="login-body-inputs">
                  <div className="input-text">
                    <input type="text" placeholder="Email"/>
                    {SVGUserIcon()}
                  </div>
                  <div className="input-password">
                    <input type="password" placeholder="Password"/>
                    {SVGKeyIcon()}
                  </div>
                </div>
                <div className="login-body-button">
                  {ButtonLabel({
                    backgroundColor:'#9BD331',
                    color:'#FFFFFF',
                    border: '#9BD331',
                    title: 'LOGIN',
                    click: this.login()
                  })}
                </div>
              </div>
              <div className="login-footer">
                <p>Forgot your password?</p>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default DummyLogin
