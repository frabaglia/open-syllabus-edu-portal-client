import React, {Component} from 'react'
import {LineChart, Line, Legend, Tooltip, XAxis, YAxis, CartesianGrid} from 'recharts'
import ButtonFilterDropdown from '../Buttons/ButtonFilterDropdown/component'
import './component.sass'
import $ from 'jquery'

const yearsFrom=[
  {_id:1, name:'1977-1979' , param: '1977-1979'},
  {_id:1, name:'1979-1981' , param: '1979-1981'},
  {_id:1, name:'1981-1983' , param: '1981-1983'},
  {_id:1, name:'1983-1985' , param: '1983-1985'},
]

const yearsTo=[
  {_id:1, name:'2010-2012' , param: '2010-2012'},
  {_id:1, name:'2012-2014' , param: '2012-2014'},
  {_id:1, name:'2014-2016' , param: '2014-2016'},
  {_id:1, name:'2016-2018' , param: '2016-2018'},
]

class LineChartComponent extends Component {

  constructor() {
    super();
    this.state = {
      data: undefined,
      width: 0,
      height: 400,
      yearsFrom: undefined,
      yearsTo: undefined
    };
  }

  componentDidMount = () =>
  {
    let width = Number($(this.refs.linechartContainer).width());
    this.setState({width: width});
    $(window).resize( () =>{
      width = Number($(this.refs.linechartContainer).width())
      if(this.refs.linechartContainer !== undefined) this.setState({width:width});
    })
    this.setState({data:this.props.data})
  }

  filterData = () =>{
    let dataFilter=[];
    if(this.state.data !== undefined){
      let data = this.state.data;
      if(this.state.yearsFrom !== undefined || this.state.yearsTo !== undefined){
        if(this.state.yearsFrom !== undefined && this.state.yearsTo === undefined) {
          dataFilter.push(this.state.yearsFrom);
          dataFilter.push(data[data.length-1]);
        }
        if(this.state.yearsFrom === undefined && this.state.yearsTo !== undefined) {
          dataFilter.push(data[0]);
          dataFilter.push(this.state.yearsTo);
        }
        if(this.state.yearsFrom !== undefined && this.state.yearsTo !== undefined) {
          dataFilter.push(this.state.yearsFrom);
          dataFilter.push(this.state.yearsTo);
        }
      }
      else {
          dataFilter.push(data[0]);
          dataFilter.push(data[data.length-1]);
        }
    }
    return dataFilter
  }

  changeDataFrom = (yearsFrom) => {
    this.state.data.map( (data,i) =>{
      if(data.name === yearsFrom) this.setState({yearsFrom:data})
    })
  }

  changeDataTo = (yearsTo) => {
    this.state.data.map( (data,i) =>{
      if(data.name === yearsTo) this.setState({yearsTo:data})
    })
  }

  render() {
    return (
      <div ref="linechartContainer" className="linechart-container">
        <p className="linechart-title font-bold mid-font-size">Share of employed people working 50 hours or more per week</p>
        <LineChart width={this.state.width} height={this.state.height} data={this.filterData()}
          margin={{ top: 5, right: 40, left: 7, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid vertical={false} />
          <Tooltip />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="Professional men" stroke="#df6161" legendType="square" strokeWidth={2}/>
          <Line type="monotone" dataKey="Professional women" stroke="#2e2edb" legendType="square" strokeWidth={2}/>
          <Line type="monotone" dataKey="Middle-income men" stroke="#61aedd" legendType="square" strokeWidth={2}/>
          <Line type="monotone" dataKey="Middle-income women" stroke="#65b23c" legendType="square" strokeWidth={2}/>
          <Line type="monotone" dataKey="Low-income men" stroke="#465568" legendType="square" strokeWidth={2}/>
          <Line type="monotone" dataKey="Low-income women" stroke="#8afca3" legendType="square" strokeWidth={2}/>
        </LineChart>
        <div className="linechart-legend">
          <div className="linechart-legend-left">
            <p className="legend-item"><span className="square professional-men"></span>Professional men</p>
            <p className="legend-item"><span className="square middle-income-men"></span>Middle-income men</p>
            <p className="legend-item"><span className="square low-income-men"></span>Low-income men</p>
          </div>
          <div className="linechart-legend-right">
            <p className="legend-item"><span className="square professional-women"></span>Professional women</p>
            <p className="legend-item"><span className="square middle-income-women"></span>Middle-income women</p>
            <p className="legend-item"><span className="square low-income-women"></span>Low-income women</p>
          </div>
        </div>
        <div className="linechart-filter">
          <p className="linechart-filter-title">Biggest changes between</p>
          <div className="linechart-filter-body">
            <ButtonFilterDropdown
              title="From"
              arrayData={yearsFrom}
              color="#A9B4C0"
              changeDataFromSelects={this.changeDataFrom}
            />
            <p>and</p>
            <ButtonFilterDropdown
              title="To"
              arrayData={yearsTo}
              color="#A9B4C0"
              changeDataFromSelects={this.changeDataTo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LineChartComponent
