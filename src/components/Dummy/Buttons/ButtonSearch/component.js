import React, {Component} from 'react'
import './component.sass'
import SearchIcon from '../../SVG/SearchIcon/component.js'


class ButtonSearch extends Component {

  render() {
      return (
        <div className="btnSearch" onClick={this.props.click}><SearchIcon/>SEARCH</div>
      )
  }
}

export default ButtonSearch
