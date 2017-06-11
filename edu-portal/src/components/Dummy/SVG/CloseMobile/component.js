import React, {Component} from 'react'

class CloseMobile extends Component {

  render() {

      return (
        <svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        onClick={this.props.click} style={{cursor:'pointer'}}>
            <g id="SVGs" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="menu_closed">
                    <g id="Group-7" transform="translate(5.000000, 5.000000)">
                        <g id="Group-5" fill="#9BD331">
                            <circle id="Oval" cx="15" cy="15" r="15"></circle>
                        </g>
                        <g id="Group-6" transform="translate(11.000000, 11.000000)" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M0,0 L8.48528137,8.48528137" id="Path-2"></path>
                            <path d="M0,0 L8.48528137,8.48528137" id="Path-2" transform="translate(4.242641, 4.242641) scale(-1, 1) translate(-4.242641, -4.242641) "></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
      )
  }
}

export default CloseMobile
