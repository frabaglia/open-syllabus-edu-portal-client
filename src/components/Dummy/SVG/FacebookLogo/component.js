import React, {Component} from 'react'

class FacebookLogo extends Component {

  render() {

      return (
        <svg width="36px" height="36px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{cursor:'pointer'}}>
            <g id="Visual-Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Landing" transform="translate(-1158.000000, -42.000000)">
                    <g id="Group-11" transform="translate(150.000000, 40.000000)">
                        <g id="Group-6" transform="translate(1008.000000, 2.000000)">
                            <g id="Group-3">
                                <circle id="Oval" fill={this.props.colorOval} cx="18" cy="18" r="18"></circle>
                                <path d="M15.75,15 L13.5,15 L13.5,18 L15.75,18 L15.75,27 L19.5,27 L19.5,18 L22.2315,18 L22.5,15 L19.5,15 L19.5,13.74975 C19.5,13.0335 19.644,12.75 20.33625,12.75 L22.5,12.75 L22.5,9 L19.644,9 C16.947,9 15.75,10.18725 15.75,12.46125 L15.75,15 L15.75,15 Z" id="Shape" fill={this.props.colorShape}></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>

      )
  }
}

export default FacebookLogo
