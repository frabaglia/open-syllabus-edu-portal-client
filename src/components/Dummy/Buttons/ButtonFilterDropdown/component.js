import React, {Component} from 'react'
import './component.sass'
import ArrowDown from '../../SVG/ArrowDown/component.js'
import ArrowUp from '../../SVG/ArrowUp/component.js'
import $ from 'jquery'

class ButtonDropdown extends Component {

  constructor(props){
    super();
    this.state = {
      open: false,
      title: props.title,
      color: props.color
    }
  }

  componentDidMount = () => {

    if(this.refs.btnDropdown !== undefined){
      $(window).click( (event) => {
        if (!event.target.matches('.dropbtn')) {
          if(this.state.open) this.setState({open:false}, () => {this.changeClassNames()});
        }
      })
    }
  }

  changeClassNames = () =>{
    if(this.state.open) {
      this.refs.btnDropdown.className = 'dropbtn dropbtn-show';
      this.refs.itemList.className = 'dropdown-content dropdown-show';
    }
    else {
      this.refs.btnDropdown.className = 'dropbtn';
      this.refs.itemList.className = 'dropdown-content';
    }
  }

  openContent = () => {
    this.setState({open:!this.state.open}, ()=>{this.changeClassNames()})
  }

  addParamToQuery = (e) =>{
    this.setState({
      title:e.target.getAttribute('data-param'),
      color: '#405063'
    },
    () =>{this.props.changeDataFromSelects(this.state.title)})
  }

  renderItemsList = () =>
  {
    let listItems = []
    this.props.arrayData.map( (data, i) => {
        listItems.push(
          <li
            key={i}
            onClick={this.addParamToQuery}
            data-param={data.param}
          >
            <span
              key={i}
              onClick={this.addParamToQuery}
              data-param={data.param}
            >{data.name}</span>
          </li>
        )
    })
    return listItems
  }

  renderArrow = () =>
  {
    return (!this.state.open) ?
    ArrowDown({color: this.state.color}) :
    ArrowUp({color: this.state.color})
  }

  render() {
      return (
        <div className="dropdown">
          <div
            ref="btnDropdown"
            onClick={this.openContent}
            className="dropbtn"
            style={{color:this.state.color}}
            >
            {this.state.title}
            {this.renderArrow()}
          </div>
          <div
            ref="itemList"
            className="dropdown-content">
            {this.renderItemsList()}
          </div>
        </div>
      )
  }
}

export default ButtonDropdown
