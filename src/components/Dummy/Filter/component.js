import React, {Component} from 'react'
import './component.sass'
import ButtonSearch from '../Buttons/ButtonSearch/component.js'
import BadgesFilterList from '../Lists/BadgesFilterList/component.js'



class Filter extends Component {

  constructor(props){
    super();
    this.state = {
      selected: '',
      queryList: [],
      currentString:''
    }
  }

  addParamToQuery = (e) => {
    this.isFilterable()
    if(this.state.currentString !== ''){
      let currentQuertList = [],
          paramQuery = {
            name: this.state.currentString
          }
      currentQuertList = this.state.queryList;

      if(e.target.type === 'text') {
        if(e.key === 'Enter') {
          currentQuertList.push(paramQuery)
          this.setState({
              queryList:currentQuertList, currentString:''
            },
            () =>{
              this.refs.inputSearch.value = '';
              this.props._makeSearch(this.state.queryList);
            }
          )
        }
      }
      if ( e.target.type === undefined) {
        currentQuertList.push(paramQuery)
        this.setState({
            queryList:currentQuertList, currentString:''
          },
          () =>{
            this.refs.inputSearch.value = '';
            this.props._makeSearch(this.state.queryList);
          }
        )
      }
    }
  }

  eraseParamFromQuery = (paramName) =>
  {
    let queryList = this.state.queryList,
        paramPosition;

    queryList.map( (param, i) =>{
      if(param.name === paramName) paramPosition = i
    })

    queryList.splice(paramPosition,1);

    this.setState(
      {queryList:queryList}, this.props._makeSearch(this.state.queryList)
    );

  }

  isFilterable = () =>{
    if(!this.props.router.location.pathname.includes('result-list')) {
      this.props.router.push('/university-portal/result-list/full-texts')
    }
  }

  render() {
      return (
        <div className="filter">
          <div className="search">
            <div className="search-input-content">
              <input
                ref='inputSearch'
                type="text"
                placeholder="Search..."
                onChange={(e) =>{this.setState({currentString:e.target.value})}}
                onKeyPress={this.addParamToQuery}
                onFocus={this.isFilterable}
              >
              </input>
            </div>
            <ButtonSearch click={this.addParamToQuery}/>
          </div>
          <div>
            <BadgesFilterList
              type={this.props.filtersCategory}
              eraseParamFromQuery={this.eraseParamFromQuery}
              paramsList={this.state.queryList}/>
          </div>
        </div>
      )
  }
}

export default Filter
