import React, {Component} from 'react'
import ExpandIcon from "../../Dummy/SVG/ExpandIcon/component.js"
import ExpandCloseIcon from "../../Dummy/SVG/ExpandCloseIcon/component.js"
import ButtonBarChartDropdown from "../Buttons/ButtonBarChartDropdown/component.js"
import ToolTip from "../ToolTip/component.js"
import LineChart from 'react-d3-components/lib/LineChart.js'
import './component.sass'
// import * as d3 from 'd3'
import {scaleOrdinal} from "d3-scale";
import $ from 'jquery'

const listType = ["Normalized","RAW"];

class LineChartComponent extends Component {

  constructor() {
    super();
    this.state = {
      width: 0,
      height: 400,
      expanded: false,
      normalized: "Normalized"
    };
  }

  componentDidMount = () =>
  {
    let width = Number($(this.refs.barchartContainer).width());
    this.setState({width: width});
    $(window).resize( () =>{
      width = Number($(this.refs.barchartContainer).width())
      if(this.refs.barchartContainer !== undefined) this.setState({width:width});
    })

    if(!this.props.legend) this.refs.legend.className = 'hidden'
  }

  makeFullScreen = () =>
  {
    if(this.props.isNormalizable){
      if(!this.state.expanded) {
        this.refs.barchartContainer.className = 'expand-barchart container-map'
        this.refs.headerContainer.className = 'container-header container-header-expand noLanding'
        // this.refs.buttonLabel.className = 'hidden'
        $('body').css( 'overflow-y', 'hidden');
        this.componentDidMount()
      }
      else {
        this.refs.barchartContainer.className = 'container-map'
        this.refs.headerContainer.className = 'container-header noLanding'
        // this.refs.buttonLabel.className = 'unattributed-label'
        $('body').css( 'overflow-y', 'scroll');
        this.componentDidMount()
      }
      this.setState({expanded:!this.state.expanded})
    }
    else {
      if(!this.state.expanded) {
        this.refs.barchartContainer.className = 'expand-barchart container-map'
        this.refs.headerContainer.className = 'container-header container-header-expand'
        this.refs.legend.className = 'legend legend-expand'
        // this.refs.buttonLabel.className = 'hidden'
        $('body').css( 'overflow-y', 'hidden');
        this.componentDidMount()
      }
      else {
        this.refs.barchartContainer.className = 'container-map'
        this.refs.headerContainer.className = 'container-header'
        this.refs.legend.className = 'legend'
        // this.refs.buttonLabel.className = 'unattributed-label'
        $('body').css( 'overflow-y', 'scroll');
        this.componentDidMount()
      }
      this.setState({expanded:!this.state.expanded})
    }


  }

  filterStoreData = () =>
  {
      let filterStore = this.props.store;
      if(!this.state.expanded){
        filterStore = []
        let arrayField;
        this.props.store.map( (field, i) =>{
          arrayField = field.values.slice(Math.max(field.values.length - 5, 0))
          filterStore.push({label:field.label, values: arrayField})
        })
      }
      return filterStore
  }

  renderExpandIcon = () =>  {
    return (!this.state.expanded) ? <ExpandIcon click={this.makeFullScreen}/> : <ExpandCloseIcon click={this.makeFullScreen}/>
  }

  // COLOR PALLETTE #3188D3 #9BD331 #5AC4C7 #FBD669 #FC976D #DF6161 #B76AC4 #85919F #405063 #855845

  // colorScale = d3.scaleOrdinal()
  //     .domain(["Economics", "Literature", "History", "English","Biology"])
  //     .range(['#FC976D','#DF6161','#FBD669','#85919F','#B76AC4']);
  colorScale = scaleOrdinal()
      .domain(["Economics", "Literature", "History", "English","Biology"])
      .range(['#FC976D','#DF6161','#FBD669','#85919F','#B76AC4']);


  tooltipScatter = (x, y0, y,f,g) => {
    let field;
    switch (f) {
      case "Economics":
        field = (<span style={{color:'#FC976D'}} className="tooltip-content-field">{"Economics"}</span>)
        break;

      case "Literature":
        field = (<span style={{color:'#DF6161'}} className="tooltip-content-field">{"Literature"}</span>)
        break;

      case "History":
        field = (<span style={{color:'#FBD669'}} className="tooltip-content-field">{"History"}</span>)
        break;

      case "English":
        field = (<span style={{color:'#85919F'}} className="tooltip-content-field">{"English"}</span>)
        break;

      case "Biology":
        field = (<span style={{color:'#B76AC4'}} className="tooltip-content-field">{"Biology"}</span>)
        break;

      default:

    }
    return(
      <div className="tooltip-wrapper">
      <div className="tooltip">
        <div className="tooltip-content">
          {field}
          <span className="tooltip-content-syllabi">{y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
        </div>
        <div className="tooltip-tail"></div>
      </div>
      </div>
    );
  };

  renderCategoryName = () =>{
    let typeSelected;
    listType.map( (type,i) =>{
      if(this.state.normalized === type) typeSelected = type;
    })

    return typeSelected;
  }

  setType = (type) => this.setState({normalized:type}, () =>{this.props.getDataNormalizedOrRAW(this.state.normalized)})
  // setType = (type) => this.setState({normalized:type}, () =>{console.log(this.state.normalized);})


  renderContainerHeader = () =>
  {
    return (this.props.isNormalizable) ? (
      <div ref="headerContainer" className="container-header noLanding">
        <p className="titleNoLanding">
          {this.props.title}
        </p>
        <div className="additional-info">
          <div className="unattributed-label" ref="buttonLabel">
            580,500 unattributed
          </div>
          <ButtonBarChartDropdown
            click={this.setType}
            title={this.renderCategoryName()}
            listType={listType}/>
          <div className="right-content-expand-button">
            {this.renderExpandIcon()}
          </div>
        </div>
      </div>
      ) : (
        <div ref="headerContainer" className="container-header">
          <p className="right-content-title">
            {this.props.title}
          </p>
          <div className="right-content-expand">
            <div className="right-content-expand-button">
              <ToolTip tooltipText="# of sillaby that we cannot date">
                <div className="unattributed-label">
                  580,500 unattributed
                </div>
              </ToolTip>
            </div>
            {this.renderExpandIcon()}
          </div>
        </div>
      )
  }

  render() {
    return (
      <div ref="barchartContainer" className="container-map container-barchart">
        {this.renderContainerHeader()}
        <div className="wrapper-container-chart">
          <div className="container-chart">
            <LineChart
              data={this.filterStoreData()}
              width={this.state.width}
              height={this.state.height}
              margin={{top: 10, bottom: 40, left: 70, right: 10}}
              // colorScale={this.colorScale}
              // tooltipHtml={this.tooltipScatter}
            />
            <div ref="legend" className="legend">
              <div className="item">
                <div className="figure economics"></div>
                <span>Economics</span>
              </div>
              <div className="item">
                <div className="figure history"></div>
                <span>History</span>
              </div>
              <div className="item">
                <div className="figure literature"></div>
                <span>Literature</span>
              </div>
              <div className="item">
                <div className="figure english"></div>
                <span>English</span>
              </div>
              <div className="item">
                <div className="figure biology"></div>
                <span>Biology</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default LineChartComponent
