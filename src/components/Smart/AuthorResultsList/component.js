import React, {Component} from 'react';
// import './component.sass';
import {connect} from 'react-redux'
// import {syllabusLinker} from '../../../utils/SyllabusLinker/component'
import {syllabusHTTPService} from '../../../utils/SyllabusHTTPService/component'

import {authorResultsListRequest, authorResultsListSuccess} from '../../../actions/AuthorResultsList/actions'
import {fieldResultsListRequest, fieldResultsListSuccess} from '../../../actions/FieldResultsList/actions'
import {institutionResultsListRequest, institutionResultsListSuccess} from '../../../actions/InstitutionResultsList/actions'
import {countryResultsListRequest, countryResultsListSuccess} from '../../../actions/CountryResultsList/actions'

import {globalError} from '../../../actions/GlobalMessages/actions'
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
      currentCategory: 'Authors',
      category: 'Authors',
      oldString: '',
      currentString: '',
      timerId: '',
      currentParamList:[],
      currentParamsQuery:[]
    }
  }

  componentDidMount = () => {
      var dispatch = this.props.dispatch

      dispatch(authorResultsListRequest())

      var syllabusHTTPServicePromise = syllabusHTTPService.getAuthorResultsList({page:[1]})

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
    this.setState({currentParamsQuery:paramsList, currentParamList:[]},
      () => this.makeRequest('Authors')
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
    if(this.state.currentString !== '' || type === "Authors"){

    let category = (type) ? type : this.state.currentCategory

    let syllabusHTTPServicePromise,
        dispatch = this.props.dispatch,
        string = (type !== "Authors" || this.state.currentCategory !== "Authors") ? [] : [this.state.currentString];

      switch (category) {
        case 'Authors':
        dispatch(authorResultsListRequest())
        syllabusHTTPServicePromise = syllabusHTTPService.getAuthorResultsList({
          query: string,
          field:this.createQuery('Fields'),
          institution: this.createQuery('Schools'),
          country: this.createQuery('Countries')
        })
        syllabusHTTPServicePromise.then( (response) => {
          let hitsConcat = response.data.hits[0].concat(response.data.hits[1])
            dispatch(authorResultsListSuccess(hitsConcat))
        }).catch(function(error) {
            dispatch(globalError(error))
        })
        break;

        case 'Fields':
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

        case 'Schools':
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

        case 'Countries':
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
          />
        </div>
      )
  }
}

export default connect(mapStateToProps)(SmartAuthorResultList)
