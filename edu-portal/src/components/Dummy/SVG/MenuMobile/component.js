import React, {Component} from 'react'

class MenuMobile extends Component {

  render() {

      return (
        <svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{cursor:'pointer'}} onClick={this.props.click}>
            <g id="SVGs" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="menu_open">
                    <g id="menu_closed">
                        <circle id="Oval" fill="#9BD331" cx="20" cy="20" r="20"></circle>
                        <path d="M10,14 C10,13.4477153 10.4553056,13 10.9918031,13 L29.0081969,13 C29.5559546,13 30,13.4438648 30,14 C30,14.5522847 29.5446944,15 29.0081969,15 L10.9918031,15 C10.4440454,15 10,14.5561352 10,14 Z M10,20 C10,19.4477153 10.4553056,19 10.9918031,19 L29.0081969,19 C29.5559546,19 30,19.4438648 30,20 C30,20.5522847 29.5446944,21 29.0081969,21 L10.9918031,21 C10.4440454,21 10,20.5561352 10,20 Z M10,26 C10,25.4477153 10.4553056,25 10.9918031,25 L29.0081969,25 C29.5559546,25 30,25.4438648 30,26 C30,26.5522847 29.5446944,27 29.0081969,27 L10.9918031,27 C10.4440454,27 10,26.5561352 10,26 Z" id="Combined-Shape" fill="#FFFFFF"></path>
                    </g>
                </g>
            </g>
        </svg>
      )
  }
}

export default MenuMobile
