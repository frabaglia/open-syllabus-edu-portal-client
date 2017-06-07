import React, {Component} from 'react'
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

    render() {
        return (
          <div>
            <header ref="header" className={this.header()}>
              <div className="huge-container">
                <NavBar router={this.props}/>
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
