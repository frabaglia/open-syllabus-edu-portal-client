import React, {Component} from 'react'
import './component.sass'
import CloseIcon from '../../SVG/CloseIcon/component.js'

class ButtonClearFilter extends Component {

  render() {
      return (
        <div className="btnClearFilter" onClick={this.props.click}>CLEAR FILTER <CloseIcon color="#FFFFFF"/></div>
      )
  }
}

export default ButtonClearFilter
