import React, {Component} from 'react'
import './component.sass'


class ButtonPagination extends Component {

  render() {

      return (
        <button className="btnPagination" onClick={this.props.click}>{this.props.title}</button>
      )
  }
}

export default ButtonPagination
