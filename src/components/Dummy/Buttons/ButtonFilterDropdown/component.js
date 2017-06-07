import React, {Component} from 'react'
import {Link} from 'react-router'
import './component.sass'
import ArrowDown from '../../SVG/ArrowDown/component.js'
import ArrowUp from '../../SVG/ArrowUp/component.js'
import $ from 'jquery'

class ButtonFilterDropdown extends Component {

  constructor(){
    super();
    this.state = {
      open: '',
      title: '',
      color: ''
    }
  }

  componentDidMount = () => this.setState({
    open: this.props.open,
    title: this.props.title,
    color: this.props.color
  })
  componentWillReceiveProps = (nextProps) => {
    this.setState({open:this.props.open})
    if(nextProps.clear) this.componentDidMount();
    if(nextProps.open) this.refs.btnAdvancedFilterDropdown.className = `advanced-filter-dropbtn advanced-filter-dropbtn-show ${this.props.class}`;
    else this.refs.btnAdvancedFilterDropdown.className = `advanced-filter-dropbtn ${this.props.class}`;
  }



  /* When the user clicks on the button,
  toggle between hiding and showing the dropdown content */
  handleOpen = () => {
    this.props.click(this.props.class)
  }

  addParamToQuery = (e) =>{
    this.setState({
      title:e.target.getAttribute('data-param'),
      color: '#405063'
    },
    () =>{this.props.changeDataFromSelects(this.props.class, this.state.title )}
  )
    // console.log(e.target.getAttribute('data-param'));
  }

  renderAdvancedFilterItem = () =>
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

  showContent = () =>
  {
    let content = (this.props.open) ? 'advanced-filter-dropdown-content advanced-filter-show' : 'advanced-filter-dropdown-content';
    return content
  }

  renderArrow = () =>
  {
    return (!this.props.open) ? <ArrowDown color={this.state.color}/> :
    <ArrowUp color={this.state.color}/>
  }

  render() {
      return (
        <div className="advanced-filter-dropdown">
          <div
            ref="btnAdvancedFilterDropdown"
            onClick={this.handleOpen}
            className={"advanced-filter-dropbtn " + this.props.class}
            style={{color:this.state.color}}
            >
            {this.state.title}
            {this.renderArrow()}
          </div>
          <div ref="myAdvancedFilterDropdown"
            className={this.showContent()}
          >
            {this.renderAdvancedFilterItem()}
          </div>
        </div>
      )
  }
}

export default ButtonFilterDropdown
