import React, {Component} from 'react'

class CheckBoxFilter extends Component {

  handlerClick = ( ) => this.props.click(this.props.name)


  render() {
      return (
        <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{cursor:'pointer'}} onClick={this.handlerClick}>
            <g id="Visual-Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Search-Results---Titles" transform="translate(-178.000000, -272.000000)" stroke="#E8E8E8" fill="#FFFFFF">
                    <g id="Group-22" transform="translate(149.000000, 140.000000)">
                        <g id="Group-36" transform="translate(30.000000, 131.000000)">
                            <circle id="Oval-2" cx="8" cy="10" r="8"></circle>
                            <g id="Visual-Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="Search-Results---Titles" transform="translate(-179.000000, -271.000000)" fill={this.props.backgroundColorInnerCircle}>
                                    <g id="Group-22" transform="translate(149.000000, 140.000000)">
                                        <g id="Group-36" transform="translate(30.000000, 131.000000)">
                                            <circle id="Oval-2" cx="8" cy="10" r="6"></circle>
                                        </g>
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

export default CheckBoxFilter
