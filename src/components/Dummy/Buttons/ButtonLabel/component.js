import React, {Component} from 'react'
import './component.sass'


class ButtonLabel extends Component {

  render() {
    let style = {
      backgroundColor: `${this.props.backgroundColor}`,
      color: `${this.props.color}`,
      border: `${this.props.border}`
    }
      return (
        <div className="btnLabel" style={style} onClick={this.props.click}>
          {this.props.title}
        </div>
      )
  }
}

export default ButtonLabel
