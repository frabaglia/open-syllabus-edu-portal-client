import React, {Component} from 'react'

import SVGEduPortalLogo from '../../Dummy/SVG/EduPortalLogo/component'
import SVGCloseIcon from '../../Dummy/SVG/CloseIcon/component'
import SVGUserIcon from '../../Dummy/SVG/UserIcon/component'
import SVGKeyIcon from '../../Dummy/SVG/KeyIcon/component'
import ButtonLabel from '../../Dummy/Buttons/ButtonLabel/component'
import {Link} from 'react-router';

import './component.sass'

class DummyLogin extends Component {

  constructor(){
    super();
    this.state={
      renderMessage: false,
      email: '',
      password:''
    }
  }

  login = () =>{
    if(this.state.email === 'EDU' && this.state.password === 'EDUPASS') this.props.router.push('/university-portal')
    else this.setState({renderMessage:true})
  }

  recoverPassword = ( ) =>{
    console.log('recoverPassword');
  }

  closeLogin = () =>{
    this.props.router.push('/')
  }

  closeWarning = () =>{this.setState({renderMessage:false})}

  renderMessage = () =>{
    return (this.state.renderMessage) ?
    (
      <div className="message">
        {SVGCloseIcon({backgroundColor:'#F7485D', color:'#FFFFFF', click:this.closeWarning})}
        <p>Please check your Email and Password</p>
      </div>
    ):
    (<div></div>)
  }

  handleChangeInput = (type, event) => this.setState({[`${type}`]:event.target.value})

  loginWithEnter = (e) => (e.key === 'Enter') ? this.login() : null

  render() {
    return (
        <div className="fixed-container">
          <div className="centered-login" style={{position:'relative'}}>
            <div className="login">
              <div className="login-close">
                {SVGCloseIcon({color:'#FFFFFF',backgroundColor:'#C8CFD7' , click: this.closeLogin})}
              </div>
              <div className="login-header">
                {SVGEduPortalLogo({color:'#9BD331', colorEDU:'#3B475B'})}
              </div>
              <div className="login-body">
                <div className="login-body-inputs">
                  <div className="input-text">
                    <input
                      type="text"
                      placeholder="Email: use EDU"
                      onChange={(e) => {this.handleChangeInput('email',e)}}
                      onKeyPress={this.loginWithEnter}
                    />
                    {SVGUserIcon()}
                  </div>
                  <div className="input-password">
                    <input
                      type="password"
                      placeholder="Password: use EDUPASS"
                      onChange={(e) => {this.handleChangeInput('password',e)}}
                      onKeyPress={this.loginWithEnter}
                    />
                    {SVGKeyIcon()}
                  </div>
                </div>
                <div className="login-body-message">
                  {this.renderMessage()}
                </div>
                <div className="login-body-button">
                  {ButtonLabel({
                    backgroundColor:'#9BD331',
                    color:'#FFFFFF',
                    border: '#9BD331',
                    title: 'LOGIN',
                    click: this.login
                  })}
                </div>
              </div>
              <div className="login-footer">
                <Link to="/recover-password">
                    <p>Forgot your password?</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default DummyLogin
