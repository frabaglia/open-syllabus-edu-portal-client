import React, {Component} from 'react'
import './component.sass'


class ButtonRegular extends Component {

  sendCategory = () =>
  {
    this.props.click(this.props.title)
  }

  render() {
      return (
        <div className="btnRegular" onClick={this.sendCategory} style={{backgroundColor:this.props.selected}}>{this.props.title}</div>
      )
  }
}

export default ButtonRegular
