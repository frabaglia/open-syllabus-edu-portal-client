import React, {Component} from 'react'
import $ from 'jquery';
import './component.sass'
import NavBar from '../../Dummy/NavBar/component.js'
import Footer from '../../Dummy/Footer/component.js'

class UIContainer extends Component {

  header = () =>
  {
    let header = 'header'
    if(this.props.location.pathname === '/') header = 'header-landing';

    return header;
  }

  componentDidMount = () =>{
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $('.navbar-fixed').addClass('shrink');
      } else {
        $('.navbar-fixed').removeClass('shrink');
      }
    });
  }

    render() {
        return (
          <div>
            <header ref="header" className={this.header()}>
              <div className="navbar-fixed">
                <div className="huge-container">
                  <NavBar router={this.props}/>
                </div>
              </div>
            </header>
            <div className="main-layout">
              <div className="huge-container">
                  <section ref='view'>{this.props.children}</section>
              </div>
            </div>
            <Footer router={this.props}/>
          </div>
        )
    }
}

export default UIContainer
