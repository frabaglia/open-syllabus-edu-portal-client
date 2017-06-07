import React, {Component} from 'react';
// import './component.sass';
import {connect} from 'react-redux'
import {syllabusLinker} from '../../../utils/SyllabusLinker/component'
import {syllabusHTTPService} from '../../../utils/SyllabusHTTPService/component'

import {fieldResultsListRequest, fieldResultsListSuccess} from '../../../actions/FieldResultsList/actions'
import {countryResultsListRequest, countryResultsListSuccess} from '../../../actions/CountryResultsList/actions'

import {globalError} from '../../../actions/GlobalMessages/actions'
import DummyCountryResultsList from '../../Views/CountryResultsList/component.js'
import {  TYPE_FIELD,
          TYPE_COUNTRY
} from '../../../store/storeTypes'

function mapStateToProps(store) {
    return {resultsList: store.get('ResultsList')}

}

class SmartCountryResultList extends Component {

  constructor(){
    super();
    this.state = {
      currentCategory: 'Countries',
      category: 'Countries',
      oldString: '',
      currentString: '',
      timerId: '',
      currentParamList:[],
      currentParamsQuery:[]
    }
  }

  componentDidMount = () => {
      var dispatch = this.props.dispatch

      dispatch(countryResultsListRequest())

      var syllabusHTTPServicePromise = syllabusHTTPService.getCountryResultsList({page:[1]})

      syllabusHTTPServicePromise.then( (response) => {
        let hitsConcat = response.data.hits[0].concat(response.data.hits[1])
          dispatch(countryResultsListSuccess(hitsConcat))
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
      () => this.makeRequest('Countries')
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
    if(this.state.currentString !== '' || type === "Countries"){

    let category = (type) ? type : this.state.currentCategory

    let syllabusHTTPServicePromise,
        dispatch = this.props.dispatch,
        string = (type !== "Countries" || this.state.currentCategory !== "Countries") ? [] : [this.state.currentString];

      switch (category) {
        case 'Countries':
        dispatch(countryResultsListRequest())
        syllabusHTTPServicePromise = syllabusHTTPService.getCountryResultsList({
          query: string,
          field: this.createQuery('Fields')
        })
        syllabusHTTPServicePromise.then( (response) => {
          let hitsConcat = response.data.hits[0].concat(response.data.hits[1])
            dispatch(countryResultsListSuccess(hitsConcat))
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
          <DummyCountryResultsList
            currentCategory={this.getCurrentFilterCategory}
            category={this.state.category}
            inputString={this.getString}
            makeSearch={this.makeRequest} store={this.props.resultsList.getIn([TYPE_COUNTRY, 'data']).toJS()}
            currentParamData={this.state.currentParamList}
            currentParamsQuery={this.getCurrentParamsQuery}
          />
        </div>
      )
  }
}

export default connect(mapStateToProps)(SmartCountryResultList)
