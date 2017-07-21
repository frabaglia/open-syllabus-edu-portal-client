import React, {Component} from 'react'
import ExpandIcon from "../../Dummy/SVG/ExpandIcon/component.js"
import ExpandCloseIcon from "../../Dummy/SVG/ExpandCloseIcon/component.js"
import ButtonBarChartDropdown from "../Buttons/ButtonBarChartDropdown/component.js"
import ToolTip from "../ToolTip/component.js"
import {BarChart, Bar, Tooltip, XAxis, YAxis, CartesianGrid} from 'recharts'
import './component.sass'
// import BarChart from 'react-d3-components/lib/BarChart.js'
// import {scaleOrdinal} from "d3-scale";

const listType = ["Normalized","RAW"];

const data = [
  { year: '1997', Economics: 2000, Literature: 3000, History: 4500, English: 5000, Biology: 20000},
  { year: '1998', Economics: 2000, Literature: 5000, History: 6500, English: 5000, Biology: 20000},
  { year: '1999', Economics: 2000, Literature: 0, History: 5000, English: 5000, Biology: 20000},
  { year: '2000', Economics: 2000, Literature: 4000, History: 4000, English: 5000, Biology: 20000},
  { year: '2001', Economics: 2000, Literature: 0, History: 4000, English: 5000, Biology: 20000},
  { year: '2002', Economics: 2000, Literature: 1500, History: 4000, English: 4, Biology: 20000},
  { year: '2003', Economics: 2000, Literature: 3000, History: 4000, English: 4, Biology: 20000},
  { year: '2004', Economics: 2000, Literature: 0, History: 4000, English: 4, Biology: 20000},
  { year: '2005', Economics: 2000, Literature: 6000, History: 4000, English: 4, Biology: 20000},
  { year: '2006', Economics: 2000, Literature: 0, History: 4000, English: 4, Biology: 20000},
  { year: '2007', Economics: 2000, Literature: 2800, History: 4000, English: 4, Biology: 20000},
  { year: '2008', Economics: 2000, Literature: 0, History: 4000, English: 4, Biology: 20000},
  { year: '2009', Economics: 2000, Literature: 2800, History: 4000, English: 4, Biology: 20000},
  { year: '2010', Economics: 2000, Literature: 2800, History: 4000, English: 4, Biology: 20000},
  { year: '2011', Economics: 6000, Literature: 20000, History: 4000, English: 4, Biology: 20000},
  { year: '2012', Economics: 2500, Literature: 2800, History: 4000, English: 5000, Biology: 20000},
  { year: '2013', Economics: 5500, Literature: 2800, History: 4000, English: 5000, Biology: 20000},
  { year: '2014', Economics: 6000, Literature: 3000, History: 4000, English: 5000, Biology: 20000},
  { year: '2015', Economics: 4000, Literature: 2800, History: 4000, English: 6000, Biology: 20000},
  { year: '2016', Economics: 4000, Literature: 2800, History: 4000, English: 10000, Biology: 20000},
];

class BarChartComponent extends Component {

  constructor() {
    super();
    this.state = {
      width: 0,
      height: 400,
      expanded: false,
      normalized: "Normalized",
      $: null
    };
  }


  componentDidMount = async () =>
  {
    const $ = await import('jquery')
    this.setState({$: $}, () =>{this.resizeChart()})
  }

  resizeChart = () =>
  {
    let width = Number(this.state.$(this.refs.barchartContainer).width());
    this.setState({width: width});
    this.state.$(window).resize( () =>{
      width = Number(this.state.$(this.refs.barchartContainer).width())
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
        this.state.$('body').css( 'overflow-y', 'hidden');
        this.componentDidMount()
      }
      else {
        this.refs.barchartContainer.className = 'container-map'
        this.refs.headerContainer.className = 'container-header noLanding'
        // this.refs.buttonLabel.className = 'unattributed-label'
        this.state.$('body').css( 'overflow-y', 'scroll');
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
        this.state.$('body').css( 'overflow-y', 'hidden');
        this.componentDidMount()
      }
      else {
        this.refs.barchartContainer.className = 'container-map'
        this.refs.headerContainer.className = 'container-header'
        this.refs.legend.className = 'legend'
        // this.refs.buttonLabel.className = 'unattributed-label'
        this.state.$('body').css( 'overflow-y', 'scroll');
        this.componentDidMount()
      }
      this.setState({expanded:!this.state.expanded})
    }


  }

  filterStoreData = () =>
  {
      // let filterStore = this.props.store;
      let filterStore = data;
      if(!this.state.expanded) filterStore = data.slice(Math.max(data.length - 5, 0))
      return filterStore
  }

  renderExpandIcon = () =>  {
    return (!this.state.expanded) ? <ExpandIcon click={this.makeFullScreen}/> : <ExpandCloseIcon click={this.makeFullScreen}/>
  }

  // COLOR PALLETTE ['#FC976D','#DF6161','#FBD669','#85919F','#B76AC4']

  renderCategoryName = () =>{
    let typeSelected;
    listType.map( (type,i) =>{
      if(this.state.normalized === type) typeSelected = type;
    })

    return typeSelected;
  }

  setType = (type) => this.setState({normalized:type}, () =>{this.props.getDataNormalizedOrRAW(this.state.normalized)})


  renderContainerHeader = () =>
  {
    return (this.props.isNormalizable) ? (
      <div ref="headerContainer" className="container-header noLanding">
        <p className="titleNoLanding font-semibold mid-font-size">
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
          <p className="right-content-title font-semibold mid-font-size">
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
            <BarChart
              width={this.state.width}
              height={this.state.height}
              margin={{top: 10, bottom: 40, left: -10, right: 40}}
              data={this.filterStoreData()}
              >
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <CartesianGrid vertical={false}/>
              <Bar stackId="0" dataKey="Economics" fill="#FC976D" />
              <Bar stackId="0" dataKey="Literature" fill="#DF6161" />
              <Bar stackId="0" dataKey="History" fill="#FBD669" />
              <Bar stackId="0" dataKey="English" fill="#85919F" />
              <Bar stackId="0" dataKey="Biology" fill="#B76AC4" />
            </BarChart>
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

export default BarChartComponent
