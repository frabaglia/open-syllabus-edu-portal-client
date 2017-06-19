import React, {Component} from 'react';
// import './component.sass';
import {connect} from 'react-redux'
import {syllabusHTTPService} from '../../../os-toolkit/SyllabusHTTPService'

import {authorResultsListRequest, authorResultsListSuccess} from '../../../constants/actions/AuthorResultsList'
import {fieldResultsListRequest, fieldResultsListSuccess} from '../../../constants/actions/FieldResultsList'
import {institutionResultsListRequest, institutionResultsListSuccess} from '../../../constants/actions/InstitutionResultsList'
import {countryResultsListRequest, countryResultsListSuccess} from '../../../constants/actions/CountryResultsList'

import {globalError} from '../../../constants/actions/GlobalMessages'
import DummyAuthorResultsList from '../../Views/AuthorResultsList/component.js'
import {
        TYPE_AUTHOR,
        TYPE_FIELD,
        TYPE_INSTITUTION,
        TYPE_COUNTRY
 } from '../../../store/storeTypes'

function mapStateToProps(store) {
    return {resultsList: store.get('ResultsList')}

}

class SmartAuthorResultList extends Component {

  constructor(){
    super();
    this.state = {
      currentCategory: 'Author',
      category: 'Author',
      oldString: '',
      currentString: '',
      timerId: '',
      currentParamList:[],
      currentParamsQuery:[],
      pagination: 1
    }
  }

  componentDidMount = () => {
      var dispatch = this.props.dispatch

      dispatch(authorResultsListRequest())

      var syllabusHTTPServicePromise = syllabusHTTPService.getAuthorResultsList({page:[this.state.pagination]})

      syllabusHTTPServicePromise.then( (response) => {
        let hitsConcat = response.data.hits[0].concat(response.data.hits[1])
          dispatch(authorResultsListSuccess(hitsConcat))
      }).catch(function(error) {
          dispatch(globalError(error))
      })

      let intervalId = setInterval( () =>{
        if(this.state.oldString !== this.state.currentString && this.state.category !== this.state.currentCategory) {
          this.setState({oldString:this.state.currentString},this.makeRequest(0))
        }
      }, 2000);
      this.setState({timerId: intervalId})

  }

  getCurrentFilterCategory = (category) => this.setState({
    currentCategory:category,
    currentParamList:[],
    oldString: this.state.currentString
  })

  getString = (string) => this.setState({currentString:string});

  getCurrentParamsQuery = (paramsList) => {
    console.log('cambio en params');
    this.setState({currentParamsQuery:paramsList, currentParamList:[], pagination:1},
      () => this.makeRequest('Author')
    )
  }

  createQuery = (category) =>
  {
    let query = [],
        currentParamsQuery = this.state.currentParamsQuery;
        currentParamsQuery.map( (param,i) =>{
          if(param.category === category) query.push(param._id)
        })
    return query
  }

  makeRequest = (type) => {
    //En esta etapa el usuario hizo click en search o apreto enter, tenemos disponible el string y categoria que tenemos actualmente en el state. Deberiamos agregar la logica de request a partir de ahora
    if(this.state.currentString !== '' || type === "Author"){

    let category = (type) ? type : this.state.currentCategory

    let syllabusHTTPServicePromise,
        dispatch = this.props.dispatch,
        string = (type !== "Author" || this.state.currentCategory !== "Author") ? [] : [this.state.currentString];

      switch (category) {
        case 'Author':
        dispatch(authorResultsListRequest())
        syllabusHTTPServicePromise = syllabusHTTPService.getAuthorResultsList({
          page:[this.state.pagination],
          query: string,
          field:this.createQuery('Field'),
          institution: this.createQuery('School'),
          country: this.createQuery('Country')
        })
        syllabusHTTPServicePromise.then( (response) => {
          let hitsConcat = response.data.hits[0].concat(response.data.hits[1])
            dispatch(authorResultsListSuccess(hitsConcat))
        }).catch(function(error) {
            dispatch(globalError(error))
        })
        break;

        case 'Field':
          dispatch(fieldResultsListRequest());
          syllabusHTTPServicePromise = syllabusHTTPService.getFieldResultsList({query: [this.state.currentString]})

          syllabusHTTPServicePromise.then(function(response) {
            let hitsConcat = response.data.hits[0].concat(response.data.hits[1])
              dispatch(fieldResultsListSuccess(hitsConcat))
          }).catch(function(error) {
              dispatch(globalError(error))
          })
          this.setState({currentParamList:this.props.resultsList.getIn([TYPE_FIELD, 'data']).toJS()})
          break;

        case 'School':
          dispatch(institutionResultsListRequest());
          syllabusHTTPServicePromise = syllabusHTTPService.getInstitutionResultsList({query: [this.state.currentString]})

          syllabusHTTPServicePromise.then(function(response) {
            let hitsConcat = response.data.hits[0].concat(response.data.hits[1])
              dispatch(institutionResultsListSuccess(hitsConcat))
          }).catch(function(error) {
              dispatch(globalError(error))
          })
          this.setState({currentParamList:this.props.resultsList.getIn([TYPE_INSTITUTION, 'data']).toJS()})
          break;

        case 'Country':
        dispatch(countryResultsListRequest());
        syllabusHTTPServicePromise = syllabusHTTPService.getCountryResultsList({query: [this.state.currentString]})

        syllabusHTTPServicePromise.then(function(response) {
          let hitsConcat = response.data.hits[0].concat(response.data.hits[1])
            dispatch(countryResultsListSuccess(hitsConcat))
        }).catch(function(error) {
            dispatch(globalError(error))
        })
        this.setState({currentParamList:this.props.resultsList.getIn([TYPE_COUNTRY, 'data']).toJS()})
          break;

        default:

      }

    }
    else {
      this.setState({currentParamList:[]})
      console.log('currentString esta vacio');
    }
  }

  pagination = () => this.setState({pagination:this.state.pagination+1}, () => this.makeRequest("Author"))

  componentWillUnmount = () =>{
    clearInterval(this.state.timerId);
  }

  render() {
      return (
        <div>
          <DummyAuthorResultsList
            currentCategory={this.getCurrentFilterCategory}
            category={this.state.category}
            inputString={this.getString}
            makeSearch={this.makeRequest} store={this.props.resultsList.getIn([TYPE_AUTHOR, 'data']).toJS()}
            currentParamData={this.state.currentParamList}
            currentParamsQuery={this.getCurrentParamsQuery}
            pagination={this.pagination}
          />
        </div>
      )
  }
}

export default connect(mapStateToProps)(SmartAuthorResultList)
