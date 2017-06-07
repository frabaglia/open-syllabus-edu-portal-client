import React, {Component} from 'react'
import './component.sass'


class ButtonBadge extends Component {

  styleColor = () =>
  {
    let color = "#A9B4C0"
    if(this.props.count >= 250 && this.props.type) color = "#67AAF9";
    return color
  }

  render() {
      return (
        <div className="btnBadge">
            <span style={{color: `${this.styleColor()}`}}>{this.props.count} </span>{this.props.title}
        </div>
      )
  }
}

export default ButtonBadge
