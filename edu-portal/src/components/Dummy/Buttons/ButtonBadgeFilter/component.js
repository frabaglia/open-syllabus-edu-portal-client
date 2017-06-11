import React, {Component} from 'react'
import './component.sass'
import CloseIcon from '../../SVG/CloseIcon/component.js'


class ButtonBadgeFilter extends Component {

  handleClick = () => this.props.click(this.button)

  render() {
      return (
        <div
          className="btnBadgeFilter"
          ref={() => { this.button = this.props.id }}
          >
            {this.props.title}
            <span onClick={this.handleClick}>
              <CloseIcon color="#A9B4C0"/>
            </span>
        </div>
      )
  }
}

export default ButtonBadgeFilter
