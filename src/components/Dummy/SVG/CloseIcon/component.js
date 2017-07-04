import React from 'react'

const CloseIcon = (props) => {
  return ( <svg style={{cursor:'pointer'}} onClick={props.click} width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g id="Visual-Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Desktop---Login" transform="translate(-905.000000, -168.000000)">
              <g id="Group-8" transform="translate(520.000000, 168.000000)">
                  <g id="Group-7" transform="translate(385.000000, 0.000000)">
                      <g id="Group-5" fill={props.backgroundColor}>
                          <circle id="Oval" cx="15" cy="15" r="15"></circle>
                      </g>
                      <g id="Group-6" transform="translate(11.000000, 11.000000)" stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M0,0 L8.48528137,8.48528137" id="Path-2"></path>
                          <path d="M0,0 L8.48528137,8.48528137" id="Path-2" transform="translate(4.242641, 4.242641) scale(-1, 1) translate(-4.242641, -4.242641) "></path>
                      </g>
                  </g>
              </g>
          </g>
      </g>
  </svg>);
}

export default CloseIcon
