import React, {Component} from 'react'
import './component.sass'
import SVGCloseIcon from '../../SVG/CloseIcon/component'


class ButtonBadgeFilter extends Component {

  handleClick = () => this.props.click(this.props.title)

  render() {
      return (
        <div
          className="btnBadgeFilter"
          >
            {this.props.title}
            {SVGCloseIcon({color:'#C8CFD7',backgroundColor:'#FFFFFF' , click: this.handleClick})}
        </div>
      )
  }
}

export default ButtonBadgeFilter
