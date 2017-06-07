import React, {Component} from 'react'
import ButtonLabel from "../../Dummy/Buttons/ButtonLabel/component.js"
import ExpandIcon from "../../Dummy/SVG/ExpandIcon/component.js"
import ExpandCloseIcon from "../../Dummy/SVG/ExpandCloseIcon/component.js"
import {BarChart} from 'react-d3-components'
import './component.sass'
import * as d3 from 'd3'
import $ from 'jquery'

const data = [
  {
    label: 'Economics',
    values: [
      {x: '2010', y: 2000},
      {x: '2011', y: 6000},
      {x: '2012', y: 2500},
      {x: '2013', y: 5500},
      {x: '2014', y: 6000},
      {x: '2015', y: 4000},
      {x: '2016', y: 4000},
    ]
  },
  {
    label: 'Literature',
    values: [
      {x: '2010', y: 0},
      {x: '2011', y: 0},
      {x: '2012', y: 20000},
      {x: '2013', y: 0},
      {x: '2014', y: 2000},
      {x: '2015', y: 3000},
      {x: '2016', y: 3000},
    ]
  },
  {
    label: 'History',
    values: [
      {x: '2010', y: 3800},
      {x: '2011', y: 3800},
      {x: '2012', y: 7000},
      {x: '2013', y: 3800},
      {x: '2014', y: 2000},
      {x: '2015', y: 2000},
      {x: '2016', y: 2000},
    ]
  },
  {
    label: 'English',
    values: [
      {x: '2010', y: 0},
      {x: '2011', y: 0},
      {x: '2012', y: 2000},
      {x: '2013', y: 0},
      {x: '2014', y: 0},
      {x: '2015', y: 2000},
      {x: '2016', y: 3800},
    ]
  },
  {
    label: 'Biology',
    values: [
      {x: '2010', y: 0},
      {x: '2011', y: 0},
      {x: '2012', y: 2000},
      {x: '2013', y: 0},
      {x: '2014', y: 0},
      {x: '2015', y: 0},
      {x: '2016', y: 4000},
    ]
  }
];


class BarChartComponent extends Component {

  constructor() {
    super();
    this.state = {
      width: 0,
      height: 400,
      expanded: false
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
    if(!this.state.expanded) {
      this.refs.barchartContainer.className = 'expand-barchart container-map'
      this.refs.headerContainer.className = 'container-header container-header-expand'
      this.refs.legend.className = 'legend legend-expand'
      $('body').css( 'overflow-y', 'hidden');
      this.componentDidMount()
    }
    else {
      this.refs.barchartContainer.className = 'container-map'
      this.refs.headerContainer.className = 'container-header'
      this.refs.legend.className = 'legend'
      $('body').css( 'overflow-y', 'scroll');
      this.componentDidMount()
    }
    this.setState({expanded:!this.state.expanded})

  }

  renderExpandIcon = () =>  {
    return (!this.state.expanded) ? <ExpandIcon click={this.makeFullScreen}/> : <ExpandCloseIcon click={this.makeFullScreen}/>
  }

  colorScale = d3.scaleOrdinal()
      .domain(["Economics", "Literature", "History", "English","Biology"])
      .range(['#67AAF9','#F7A3EB','#FBD669','#B76AC4','#B8E986']);


  tooltipScatter = (x, y0, y,f,g) => {
    let field;
    switch (f) {
      case "Economics":
        field = (<span style={{color:'#67AAF9'}} className="tooltip-content-field">{"Economics"}</span>)
        break;

      case "Literature":
        field = (<span style={{color:'#F7A3EB'}} className="tooltip-content-field">{"Literature"}</span>)
        break;

      case "History":
        field = (<span style={{color:'#FBD669'}} className="tooltip-content-field">{"History"}</span>)
        break;

      case "English":
        field = (<span style={{color:'#B76AC4'}} className="tooltip-content-field">{"English"}</span>)
        break;

      case "Biology":
        field = (<span style={{color:'#B8E986'}} className="tooltip-content-field">{"Biology"}</span>)
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

  render() {
    return (
      <div ref="barchartContainer" className="container-map container-barchart">
        <div ref="headerContainer" className="container-header">
          <p className="right-content-title">
            {this.props.title}
          </p>
          <div className="right-content-expand">
            <ButtonLabel backgroundColor="" color="#85919F" border="1px solid #E8E8E8" title="580,500 unattributed"/>
            {this.renderExpandIcon()}
          </div>
        </div>
        <div className="wrapper-container-chart">
          <div className="container-chart">
            <BarChart
              data={data}
              width={this.state.width}
              height={this.state.height}
              margin={{top: 10, bottom: 40, left: 70, right: 10}}
              colorScale={this.colorScale}
              tooltipHtml={this.tooltipScatter}
            />
            <div ref="legend" className="legend">
              <div className="item">
                <div className="figure economics"></div>
                <span>Economics</span>
              </div>
              <div className="item">
                <div className="figure literature"></div>
                <span>History</span>
              </div>
              <div className="item">
                <div className="figure history"></div>
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

export default BarChartComponent
