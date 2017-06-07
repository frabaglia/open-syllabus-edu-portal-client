import React, {Component} from 'react'
import './component.sass'
import ArrowDown from '../../SVG/ArrowDown/component.js'
import ArrowUp from '../../SVG/ArrowUp/component.js'
// import {
//     TYPE_TITLE,
//     TYPE_AUTHOR,
//     TYPE_INSTITUTION,
//     TYPE_FIELD,
//     TYPE_COUNTRY,
//     TYPE_PUBLISHER,
//     // TYPE_INSTITUTION_FIELD
// } from '../../../constants/action-types/store'

class ButtonMostFrecuentDropdown extends Component {

  constructor() {
    super();
    this.state = {
      open: false
    }
  }

  componentDidMount()
  {
    // Close the dropdown menu if the user clicks outside of it
    window.onclick = (event) => {
      if (!event.target.matches('.most-frecuent-dropbtn') && this.refs.myMostFrecuentDropdown !== undefined) {
        // let dropdowns = this.refs.myMostFrecuentDropdown;
        // if (dropdowns.classList.contains('most-frecuent-show')) dropdowns.classList.remove('most-frecuent-show');
        if(this.state.open) this.setState({open:false}, () => {this.changeStyleButton()});
      }
    }
  }

  /* When the user clicks on the button,
  toggle between hiding and showing the dropdown content */
  handleOpen = (e) => {
    e.stopPropagation();
    this.setState({open:!this.state.open}, () => {this.changeStyleButton()});
  }

  changeStyleButton = () =>
  {
    if(this.state.open)
    {
      this.refs.btnMostFrecuentDropdown.classList = 'most-frecuent-dropbtn most-frecuent-dropbtn-open'
      this.refs.myMostFrecuentDropdown.classList = 'most-frecuent-dropdown-content most-frecuent-dropdown-content-open most-frecuent-show'
    }
    else
    {
      this.refs.btnMostFrecuentDropdown.classList = 'most-frecuent-dropbtn'
      this.refs.myMostFrecuentDropdown.classList = 'most-frecuent-dropdown-content'
    }
  }


  showLinks = () =>
  {
    let links = [],
        types = this.props.listType;

        for (var i in types) {
          if(types[i] !== this.props.title) links.push(
            <div key={i} onClick={this.setType}>
              <span>{types[i]}</span>
            </div>
          )
        }
    return links;
  }

  setType = (e) => {
    let types = this.props.listType;

    for (var i in types) {
      if(e.target.innerHTML.includes(types[i])) this.props.click(i);
    }
  }

  renderArrow = () =>
  {
    let arrow = (this.state.open) ? (<ArrowUp color="#FFFFFF"/>) : (<ArrowDown color="#FFFFFF"/>)
    // let arrow = (this.state.open && this.refs.myMostFrecuentDropdown.className.includes('most-frecuent-show')) ? (<ArrowUp color="#FFFFFF"/>) : (<ArrowDown color="#FFFFFF"/>)
    return arrow
  }


  render() {
      return (
        <div className="most-frecuent-dropdown">
          <div ref="btnMostFrecuentDropdown" onClick={this.handleOpen} className="most-frecuent-dropbtn">
            {this.props.title}
            {this.renderArrow()}
          </div>
          <div ref="myMostFrecuentDropdown" className="most-frecuent-dropdown-content">
            {this.showLinks()}
          </div>
        </div>
      )
  }
}

export default ButtonMostFrecuentDropdown
