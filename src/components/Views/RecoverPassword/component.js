import React, {Component} from 'react'

import SVGEduPortalLogo from '../../Dummy/SVG/EduPortalLogo/component'
import SVGCloseIcon from '../../Dummy/SVG/CloseIcon/component'
import SVGUserIcon from '../../Dummy/SVG/UserIcon/component'
import SVGCheckIcon from '../../Dummy/SVG/CheckIcon/component'
import ButtonLabel from '../../Dummy/Buttons/ButtonLabel/component'
import {Link} from 'react-router';

import './component.sass'

class DummyLogin extends Component {

  constructor(){
    super();
    this.state={
      recoverState: false,
      renderMessage: false,
      email: ''
    }
  }

  closeWarning = () =>{this.setState({renderMessage:false})}

  renderMessage = () =>{
    return (this.state.renderMessage) ?
    (
      <div className="message">
        {SVGCloseIcon({backgroundColor:'#F7485D', color:'#FFFFFF', click:this.closeWarning})}
        <p>Please check your Email</p>
      </div>
    ):
    (<div></div>)
  }

  recoverPassword = ( ) =>{
    if(this.state.email === '') this.setState({renderMessage:true})
    else this.setState({recoverState:true})
  }

  closeLogin = () =>{this.props.router.push('/')}

  handleChangeInput = (type, event) => this.setState({[`${type}`]:event.target.value})

  loginWithEnter = (e) => (e.key === 'Enter') ? this.recoverPassword() : null

  renderBody = () =>{
    let component;
    if(!this.state.recoverState){
      component =(
        <div>
          <div className="login-body">
            <p className="login-body-title">
              Use your Email to recover your password
            </p>
            <div className="login-body-inputs">
              <div className="input-text">
                <input
                  type="text"
                  placeholder="Email"
                  onChange={(e) => {this.handleChangeInput('email',e)}}
                  onKeyPress={this.loginWithEnter}
                />
                {SVGUserIcon()}
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
                title: 'RECOVER',
                click: this.recoverPassword
              })}
            </div>
          </div>
          <div className="login-footer">
            <Link to="/login">
                <p>Back to login</p>
            </Link>
          </div>
        </div>
      )
    }
      else{
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

    return component;
  }

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
              {this.renderBody()}
            </div>
          </div>
        </div>
    )
  }
}

export default DummyLogin
