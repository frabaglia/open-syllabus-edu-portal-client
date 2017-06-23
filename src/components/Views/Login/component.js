import React, {Component} from 'react'

import SVGEduPortalLogo from '../../Dummy/SVG/EduPortalLogo/component'
import SVGCloseIcon from '../../Dummy/SVG/CloseIcon/component'
import SVGUserIcon from '../../Dummy/SVG/UserIcon/component'
import SVGKeyIcon from '../../Dummy/SVG/KeyIcon/component'
import SVGCheckIcon from '../../Dummy/SVG/CheckIcon/component'
import ButtonLabel from '../../Dummy/Buttons/ButtonLabel/component'

import './component.sass'

class DummyLogin extends Component {

  constructor(){
    super();
    this.state={
      renderMessage: false,
      recoverState: false,
      recoverSuccess: false
    }
  }

  login = () =>{
    console.log('login');
    this.props.router.push('/university-portal')
  }

  recoverPassword = ( ) =>{
    console.log('recoverPassword');
  }

  closeLogin = () =>{
    this.props.router.push('/')
  }

  renderMessage = () =>{
    return (this.state.renderMessage) ?
    (
      <div className="message">
        {SVGCloseIcon({color:'#F7485D'})}
        <p>Please check your Email and Password</p>
      </div>
    ):
    (<div></div>)
  }

  renderBody = () =>{
    let component;
    if(this.state.recoverState){
      component =(
        <div>
          <div className="login-body">
            <p className="login-body-title">
              Use your Email to recover your password
            </p>
            <div className="login-body-inputs">
              <div className="input-text">
                <input type="text" placeholder="Email"/>
                {SVGUserIcon()}
              </div>
            </div>
            <div className="login-body-message"></div>
            <div className="login-body-button">
              {ButtonLabel({
                backgroundColor:'#9BD331',
                color:'#FFFFFF',
                border: '#9BD331',
                title: 'RECOVER',
                click: this.recoverPassword()
              })}
            </div>
          </div>
          <div className="login-footer">
            <p>Back to login</p>
          </div>
        </div>
      )

      if(this.state.recoverSuccess){
        component = (
          <div>
            <div className="login-body">
              <div className="login-body-success">
                <div className="login-body-success-icon">
                  {SVGCheckIcon()}
                </div>
                <div className="login-body-success-description">
                  Good news, we have sent you a new password, check your inbox.
                </div>
              </div>
            </div>
          </div>
        )
      }
    }
    else {
      component = (
        <div>
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
            <p>Forgot your password?</p>
          </div>
        </div>
      )
    }

    return component;
  }

  render() {
    return (
        <div className="fixed-container">
          <div className="centered-login" style={{position:'relative'}}>
            <div style={{position:'absolute',top:'0',left:'0'}}>
              <span
                style={{display:'block',cursor:'pointer'}}
                onClick={()=>{this.setState({
                  renderMessage: false,
                  recoverState:false,
                  recoverSuccess:false
                })}}
                >Init Login
              </span>
              <span
                style={{display:'block',cursor:'pointer'}}
                onClick={()=>{this.setState({
                  renderMessage: true,
                  recoverState:false,
                  recoverSuccess:false
                })}}
                >Wrong pass or user
              </span>
              <span
                style={{display:'block',cursor:'pointer'}}
                onClick={()=>{this.setState({
                  renderMessage: false,
                  recoverState:true,
                  recoverSuccess:false
                })}}
                >Recover pass
              </span>
              <span
                style={{display:'block',cursor:'pointer'}}
                onClick={()=>{this.setState({
                  renderMessage: false,
                  recoverState:true,
                  recoverSuccess:true
                })}}
                >Success recover
              </span>
            </div>
            <div className="login">
              <div className="login-close">
                {SVGCloseIcon({color:'#C8CFD7', click: this.closeLogin})}
              </div>
              <div className="login-header">
                {SVGEduPortalLogo({color:'#9BD331', colorEDU:'#3B475B'})}
              </div>
              {this.renderBody()}
            </div>
          </div>
        </div>
    )
  }
}

export default DummyLogin
