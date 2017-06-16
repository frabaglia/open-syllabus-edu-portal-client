import React, {Component} from 'react';
import {connect} from 'react-redux'
import {syllabusHTTPService} from '../../../os-toolkit/SyllabusHTTPService/component'

import {fieldResultsListRequest, fieldResultsListSuccess} from '../../../constants/actions/FieldResultsList'
import {countryResultsListRequest, countryResultsListSuccess} from '../../../constants/actions/CountryResultsList'

import {globalError} from '../../../constants/actions/GlobalMessages'
import DummyFieldResultsList from '../../Views/FieldResultsList/component.js'
import {  TYPE_FIELD,
          TYPE_COUNTRY
} from '../../../constants/action-types/store'

function mapStateToProps(store) {
    return {resultsList: store.get('ResultsList')}

}

class SmartFieldResultList extends Component {

  constructor(){
    super();
    this.state = {
      currentCategory: 'Fields',
      category: 'Fields',
      oldString: '',
      currentString: '',
      timerId: '',
      currentParamList:[],
      currentParamsQuery:[]
    }
  }

  componentDidMount = () => {
      var dispatch = this.props.dispatch

      dispatch(fieldResultsListRequest())

      var syllabusHTTPServicePromise = syllabusHTTPService.getFieldResultsList({page:[1]})

      syllabusHTTPServicePromise.then( (response) => {
        let hitsConcat = response.data.hits[0].concat(response.data.hits[1])
          dispatch(fieldResultsListSuccess(hitsConcat))
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
      () => this.makeRequest('Fields')
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
    if(this.state.currentString !== '' || type === "Fields"){

    let category = (type) ? type : this.state.currentCategory

    let syllabusHTTPServicePromise,
        dispatch = this.props.dispatch,
        string = (type !== "Fields" || this.state.currentCategory !== "Fields") ? [] : [this.state.currentString];

      switch (category) {
        case 'Fields':
        dispatch(fieldResultsListRequest())
        syllabusHTTPServicePromise = syllabusHTTPService.getFieldResultsList({
          query: string,
          country: this.createQuery('Countries')
        })
        syllabusHTTPServicePromise.then( (response) => {
          let hitsConcat = response.data.hits[0].concat(response.data.hits[1])
            dispatch(fieldResultsListSuccess(hitsConcat))
        }).catch(function(error) {
            dispatch(globalError(error))
        })
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
          <DummyFieldResultsList
            currentCategory={this.getCurrentFilterCategory}
            category={this.state.category}
            inputString={this.getString}
            makeSearch={this.makeRequest}
            store={this.props.resultsList.getIn([TYPE_FIELD, 'data']).toJS()}
            currentParamData={this.state.currentParamList}
            currentParamsQuery={this.getCurrentParamsQuery}
          />
        </div>
      )
  }
}

export default connect(mapStateToProps)(SmartFieldResultList)
