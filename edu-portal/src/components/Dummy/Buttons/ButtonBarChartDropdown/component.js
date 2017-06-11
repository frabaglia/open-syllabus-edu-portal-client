import React, {Component} from 'react'
import './component.sass'
import ArrowDown from '../../SVG/ArrowDown/component.js'
import ArrowUp from '../../SVG/ArrowUp/component.js'
import ToolTip from '../../ToolTip/component.js'

class ButtonBarChartDropdown extends Component {

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
      if (!event.target.matches('.barchart-dropbtn') && this.refs.myMostBarchartDropdown !== undefined) {
        // let dropdowns = this.refs.myMostBarchartDropdown;
        // if (dropdowns.classList.contains('barchart-show')) dropdowns.classList.remove('barchart-show');
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
      this.refs.btnBarchartDropdown.classList = 'barchart-dropbtn barchart-dropbtn-open'
      this.refs.myMostBarchartDropdown.classList = 'barchart-dropdown-content barchart-dropdown-content-open barchart-show'
    }
    else
    {
      this.refs.btnBarchartDropdown.classList = 'barchart-dropbtn'
      this.refs.myMostBarchartDropdown.classList = 'barchart-dropdown-content'
    }
  }


  showLinks = () =>
  {
    let links = [],
        types = this.props.listType;

        for (var i in types) {
          if(types[i] !== this.props.title) {
            let button;
            if(types[i] === 'Normalized'){
              button = (
                <ToolTip key={i} tooltipText="Adjust for per-year collection size">
                  <div  onClick={this.setType}>
                    <span>{types[i]}</span>
                  </div>
                </ToolTip>
              )
            }
            else {
              button = (
                <ToolTip key={i} tooltipText="RAW numbers">
                  <div  onClick={this.setType}>
                    <span>{types[i]}</span>
                  </div>
                </ToolTip>
              )
            }
            links.push(button)
          }
        }
    return links;
  }

  setType = (e) => {
    let types = this.props.listType;

    types.map( (type, i) => {
      if(e.target.innerHTML.includes(type)) this.props.click(type);
    })
  }

  renderArrow = () =>
  {
    let arrow = (this.state.open) ? (<ArrowUp color="#A9B4C0"/>) : (<ArrowDown color="#A9B4C0"/>)
    return arrow
  }

  renderBarchartBtn = () =>{
    let button;
    if(this.props.title === 'Normalized'){
      button = (
        <ToolTip tooltipText="Adjust for per-year collection size">
          <div ref="btnBarchartDropdown" onClick={this.handleOpen} className="barchart-dropbtn">
            {this.props.title}
            {this.renderArrow()}
          </div>
        </ToolTip>
      )
    }
    else {
      button = (
        <ToolTip tooltipText="RAW numbers">
          <div ref="btnBarchartDropdown" onClick={this.handleOpen} className="barchart-dropbtn">
            {this.props.title}
            {this.renderArrow()}
          </div>
        </ToolTip>
      )
    }

    return button;
  }


  render() {
      return (
        <div className="barchart-dropdown">
          {this.renderBarchartBtn()}
          <div ref="myMostBarchartDropdown" className="barchart-dropdown-content">
            {this.showLinks()}
          </div>
        </div>
      )
  }
}

export default ButtonBarChartDropdown
