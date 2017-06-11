import React, {Component} from 'react'

class ExpandIcon extends Component {

  render() {

      return (
        <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" onClick={this.props.click} style={{cursor:'pointer'}}>
            <g id="Visual-Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Landing" transform="translate(-1235.000000, -668.000000)">
                    <g id="Group-15" transform="translate(740.000000, 645.000000)">
                        <g id="Group-8" transform="translate(495.000000, 23.000000)">
                            <g id="Group-26">
                                <rect id="Rectangle-3" fill="#C8CFD7" x="0" y="0" width="32" height="32" rx="16"></rect>
                                <g id="Group-14" transform="translate(9.000000, 9.000000)" fill="#FFFFFF">
                                    <g id="Group-16">
                                        <path d="M1.00723084,11.9855383 L2.01446169,12.9927692 L2.01446169,8.00723084 C2.01446169,7.45095261 1.56350908,7 1.00723084,7 C0.450952609,7 -2.90745227e-15,7.45095261 0,8.00723084 L2.68380209e-14,12.9927692 C2.99691234e-14,13.5490474 0.450952609,14 1.00723084,14 L5.99276916,14 C6.54904739,14 7,13.5490474 7,12.9927692 C7,12.4364909 6.54904739,11.9855383 5.99276916,11.9855383 L1.00723084,11.9855383 Z" id="Path-3"></path>
                                        <path d="M12.9927692,2.01446169 L11.9855383,1.00723084 L11.9855383,5.99276916 C11.9855383,6.54904739 12.4364909,7 12.9927692,7 C13.5490474,7 14,6.54904739 14,5.99276916 L14,1.00723084 C14,0.450952609 13.5490474,2.54961199e-14 12.9927692,2.28123178e-14 L8.00723084,0 C7.45095261,-2.46015192e-15 7,0.450952609 7,1.00723084 C7,1.56350908 7.45095261,2.01446169 8.00723084,2.01446169 L12.9927692,2.01446169 Z" id="Path-3"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
      )
  }
}

export default ExpandIcon
