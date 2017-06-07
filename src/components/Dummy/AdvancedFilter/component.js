import React, {Component} from 'react'
import './component.sass'
import $ from 'jquery'

import ArrowDown from '../SVG/ArrowDown/component.js'
import FilterIcon from '../SVG/FilterIcon/component.js'
import ButtonFilterDropdown from '../Buttons/ButtonFilterDropdown/component.js'
import OpenAccessIcon from '../SVG/OpenAccessIcon/component.js'
import CloseAccessIcon from '../SVG/CloseAccessIcon/component.js'
import {data} from '../../../utils/Data/component.js'


class AdvancedFilter extends Component {

    constructor(){
      super();
      this.state={
        radio50Years: false,
        radio10Years: false,
        radioOpenAccess: false,
        to: false,
        from: false,
        usState: false,
        schoolType:false,
        dataTo: false,
        dataFrom: false,
        dataUsState: false,
        dataSchoolType: false,
        clear: false
      }
    }


    componentDidMount = () =>
    {
        $(window).resize( () => {
          if( $(window).width() <= 900 ) $(this.refs.content).slideUp("slow");
          else $(this.refs.content).slideDown("slow");
        });

        $(window).click( (e) => {
          if(typeof e.target.className.includes === "function"){
            if(!(e.target.className.includes('advanced-filter-dropbtn')) && this.refs.container !== undefined) this.setState({
              to: false,
              from: false,
              usState: false,
              schoolType: false
            })
          }
        })

        if(this.props.full) {
          this.refs.filterUSOnly.className = "filter-USOnly hidden"
          this.refs.filterOpenAccess.className = ""
        }
        else {
          this.refs.filterUSOnly.className = "filter-USOnly"
          this.refs.filterOpenAccess.className = "filter-USOnly hidden"
        }
    }

    componentWillReceiveProps = (nextProps) =>
    {
      if(nextProps.clearFilter) {
        this.setState({
          radio50Years: false,
          radio10Years: false,
          radioOpenAccess: false,
          to: false,
          from: false,
          usState: false,
          schoolType:false,
          dataTo: false,
          dataFrom: false,
          dataUsState: false,
          dataSchoolType: false,
          clear: true
        })
        $('#openAccess').prop('checked',false)
        $('#filter10').prop('checked',false)
        $('#filter50').prop('checked',false)
      }

      if(!this.props.full) this.refs.filterUSOnly.className = "filter-USOnly hidden"
      else this.refs.filterUSOnly.className = "filter-USOnly"
    }

    openFilter = () =>
    {
      if(this.refs.content.className.includes('close')) {
        $(this.refs.content).slideDown("slow");
        this.refs.content.className = 'advanced-filter-content'
      }
      else {
        $(this.refs.content).slideUp("slow");
        this.refs.content.className += ' close'
      }

    }

    optionsCheck = (e) =>
    {

      switch (e.target.value) {
        case '50years':
          if(this.state.radio50Years) $(e.target).prop('checked',false)
          else $(e.target).prop('checked',true)
          let radio10 = (this.state.radio10Years) ? this.state.radio50Years : false
          this.setState(
            {
              radio50Years:!this.state.radio50Years,
              radio10Years: radio10
            },
            () => this.sendParamQuery()
          )
          break;

        case '10years':
          if(this.state.radio10Years) $(e.target).prop('checked',false)
          else $(e.target).prop('checked',true)
          let radio50 = (this.state.radio50Years) ? this.state.radio10Years : false
          this.setState(
            {
              radio10Years:!this.state.radio10Years,
              radio50Years: radio50
            },
            () => this.sendParamQuery()
          )
          break;

        case 'openAccess':
          if(this.state.radioOpenAccess) $(e.target).prop('checked',false)
          else $(e.target).prop('checked',true)
          this.setState(
            {radioOpenAccess:!this.state.radioOpenAccess},
            () => this.sendParamQuery()
          )
          break;

          default:
      }
    }

    changeDataFromSelects = (select, newData) =>
    {
      switch (select) {
        case 'to':
          this.setState({dataTo:newData}, () => {this.sendParamQuery()})
          break;

        case 'from':
          this.setState({dataFrom:newData}, () => {this.sendParamQuery()})
          break;

        case 'usState':
          this.setState({dataUsState:newData}, () => {this.sendParamQuery('usState')})
          break;

        case 'schoolType':
          this.setState({dataSchoolType:newData}, () => {this.sendParamQuery()})
          break;
          default:
      }
    }

    sendParamQuery = () =>
    {
      let currentState = this.state,
          currentParamsQuery = [];
      for (var i in currentState) {

        switch (i) {
          case 'dataTo':
            if(currentState[i]) currentParamsQuery.push({
              category:'class_year_end',
              _id: currentState[i]
            })
            break;

          case 'dataFrom':
            if(currentState[i]) currentParamsQuery.push({
              category:'class_year_start',
              _id: currentState[i]
            })
            break;

          case 'radioOpenAccess':
            if(currentState[i]) currentParamsQuery.push({
              category:'open_access',
              _id: currentState[i]
            })
            break;

          case 'dataUsState':
            if(currentState[i]) currentParamsQuery.push({
              category:'us_state',
              _id: currentState[i]
            })
            break;

          case 'dataSchoolType':
            if(currentState[i]) currentParamsQuery.push({
              category:'inst_type',
              _id: currentState[i]
            })
            break;

          case 'radio10Years':
            if(currentState[i]) currentParamsQuery.push({
              category:'pub_year_start',
              _id: currentState[i]
            })
            break;

          case 'radio50Years':
            if(currentState[i]) currentParamsQuery.push({
              category:'pub_year_end',
              _id: currentState[i]
            })
            break;

            default:
        }

      }

      this.props.currentParamsQuery(currentParamsQuery)
    }

    handleOpenButtons = (button) =>
    {
      this.setState({clear:false})
      switch (button) {
        case 'to':
          let open = (!this.state.from && !this.state.usState && !this.state.schoolType) ? false : this.state.to
          this.setState({
            to: !this.state.to,
            from: open,
            usState: open,
            schoolType: open
          })
          break;
        case 'from':
          open = (!this.state.to && !this.state.usState && !this.state.schoolType) ? false : this.state.from
          this.setState({
            from: !this.state.from,
            to: open,
            usState: open,
            schoolType: open
          })
          break;
        case 'usState':
          open = (!this.state.to && !this.state.from && !this.state.schoolType) ? false : this.state.usState
          this.setState({
            usState: !this.state.usState,
            to: open,
            from: open,
            schoolType: open
          })
          break;
        case 'schoolType':
          open = (!this.state.to && !this.state.from && !this.state.to) ? false : this.state.usState
          this.setState({
            schoolType: !this.state.schoolType,
            to: open,
            from: open,
            usState: open
          })
          break;
        case 'closeAll':
          this.setState({
            schoolType: false,
            to: false,
            from: false,
            usState: false
          })
          break;

        default:
      }
    }

    renderAccessIcon = () =>{
      return (this.state.radioOpenAccess) ? (<OpenAccessIcon/>) : (<CloseAccessIcon/>)
    }

    render() {
      // console.log(this.state.to);
      // console.log(this.state.from);
      // console.log(this.state.usState);
      // console.log(this.state.schoolType);
      // console.log(this.state.radio50Years);
      // console.log(this.state.radio10Years);
      // console.log(this.state.radioOpenAccess);
        return (
          <div ref="container" className="advanced-filter">
            <div className="advanced-filter-title">
              <div className="title">
                <FilterIcon/>  <span>FILTERS</span>
              </div>
              <div onClick={this.openFilter}>
                <span>EXPAND</span> <ArrowDown color="#FBD669"/>
              </div>
            </div>
            <div ref="content" className="advanced-filter-content close">
              <div className="filter-published-years">
                <div>
                  <input type="radio" name="filterYears" id="filter50" value="50years" onClick={this.optionsCheck}/>
                  <label htmlFor="filter50">Published in the last 50 years</label>
                  <div className="check"></div>
                </div>
                <div>
                  <input type="radio" name="filterYears" id="filter10" value="10years" onClick={this.optionsCheck}/>
                  <label htmlFor="filter10">Published in the last 10 yearss</label>
                  <div className="check"></div>
                </div>
                <div ref="filterOpenAccess">
                  <input type="radio" name="filterOpenAcess" id="openAccess" value="openAccess" onClick={this.optionsCheck}/>
                  <label htmlFor="openAccess">Open Access Resources {this.renderAccessIcon()}</label>
                  <div className="check"></div>
                </div>
              </div>
              <div className="filter-date-range-classes">
                <span>Date or date range of classes taught</span>
                <div>
                  <ButtonFilterDropdown
                    key={0} title="From"
                    class="from"
                    click={this.handleOpenButtons}
                    open={this.state.from}
                    arrayData={data('yearsData')}
                    color="#A9B4C0"
                    changeDataFromSelects={this.changeDataFromSelects}
                    clear={this.state.clear}
                  />
                  <ButtonFilterDropdown
                    key={1}
                    title="To"
                    class="to"
                    click={this.handleOpenButtons}
                    open={this.state.to}
                    arrayData={data('yearsData')}
                    color="#A9B4C0"
                    changeDataFromSelects={this.changeDataFromSelects}
                    clear={this.state.clear}
                  />
                </div>
              </div>
              <div ref="filterUSOnly" className="filter-USOnly">
                <span>US Only</span>
                <div className="US-states">
                  <ButtonFilterDropdown
                    key={2}
                    title="US State"
                    class="usState"
                    click={this.handleOpenButtons}
                    open={this.state.usState}
                    arrayData={data('statesData')}
                    color="#A9B4C0"
                    changeDataFromSelects={this.changeDataFromSelects}
                    clear={this.state.clear}
                  />
                </div>
                <div className="US-Institution-type">
                  <ButtonFilterDropdown
                    key={3}
                    title="School type"
                    class="schoolType"
                    click={this.handleOpenButtons}
                    open={this.state.schoolType}
                    arrayData={data('institutionTypeData')}
                    color="#A9B4C0"
                    changeDataFromSelects={this.changeDataFromSelects}
                    clear={this.state.clear}
                  />
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default AdvancedFilter
