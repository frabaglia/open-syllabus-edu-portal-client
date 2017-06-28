import React, {Component} from 'react'
import './component.sass'
import SVGSearchIcon from '../../SVG/SearchIcon/component.js'


class ButtonSearch extends Component {

  render() {
      return (
        <div className="btnSearch" onClick={this.props.click}>
          {SVGSearchIcon()}
          <span>SEARCH</span>
        </div>
      )
  }
}

export default ButtonSearch
