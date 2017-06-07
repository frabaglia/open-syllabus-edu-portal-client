import React, {Component} from 'react'
import {Link} from 'react-router'
import './component.sass'
import ArrowDown from '../SVG/ArrowDown/component.js'
import ArrowUp from '../SVG/ArrowUp/component.js'
import $ from 'jquery'

class ButtonDropdown extends Component {

  constructor() {
    super();
    this.state = {
      open: false
    }
  }

  componentDidMount()
  {
    // Close the dropdown menu if the user clicks outside of it
    $(window).click( (event) => {
      if (!event.target.matches('.navbar-dropbtn') && this.refs.myNavBarDropdown !== undefined) {
        // let dropdowns = this.refs.myNavBarDropdown;
        // if (dropdowns.classList.contains('navbar-show')) dropdowns.classList.remove('navbar-show');
        // this.setState({open:!this.state.open});
        if(this.state.open) this.setState({open:false}, () => {this.changeStyleButton()});
      }
    })

  }

  /* When the user clicks on the button,
  toggle between hiding and showing the dropdown content */
  handleOpen = (e) => {
    e.stopPropagation();
    this.setState({open:!this.state.open}, () => {this.changeStyleButton()});
  }

  /* Set title of the button */
  showTitle = () =>
  {
    let title = this.props.reactRouter.location.pathname.split('/');
    return title[2].toUpperCase();
  }

  /* Make array of links */
  showLinks = () =>
  {
    let links = []
    // eslint-disable-next-line
    this.props.reactRouter.routes[1].childRoutes.map( (childs, i) => {
      let currentLocation = this.showTitle();
      if(childs.path !== currentLocation.toLowerCase()){
        let titleLink = childs.path.toUpperCase();
        links.push(
          <Link key={i} to={`/results-list/${childs.path}`} className="link">
          <span>{titleLink}</span>
          </Link>
        )
      }
    })
    return links;
  }

  changeStyleButton = () =>
  {
    if(this.state.open)
    {
      this.refs.navbarDropdown.classList = 'navbar-dropdown navbar-dropdown-open'
      this.refs.myNavBarDropdown.classList = 'navbar-dropdown-content navbar-dropdown-content-open navbar-show'
    }
    else
    {
      this.refs.navbarDropdown.classList = 'navbar-dropdown'
      this.refs.myNavBarDropdown.classList = 'navbar-dropdown-content'
    }
  }

  renderArrow = () =>
  {
    let arrow = (this.state.open) ? (<ArrowUp color="#FFFFFF"/>) : (<ArrowDown color="#FFFFFF"/>)
    return arrow
  }

  render() {
      return (
        <div ref="navbarDropdown" className="navbar-dropdown">
          <div ref="btnDropdown" onClick={this.handleOpen} className="navbar-dropbtn">
            {this.showTitle()}
            {this.renderArrow()}
          </div>
          <div ref="myNavBarDropdown" className="navbar-dropdown-content">
            {this.showLinks()}
          </div>
        </div>
      )
  }
}

export default ButtonDropdown
