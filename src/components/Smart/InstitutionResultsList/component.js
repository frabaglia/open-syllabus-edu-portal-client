import React, {Component} from 'react';
import {connect} from 'react-redux'
import {syllabusHTTPService} from '../../../utils/SyllabusHTTPService/component'

import {fieldResultsListRequest, fieldResultsListSuccess} from '../../../constants/actions/FieldResultsList/actions'
import {institutionResultsListRequest, institutionResultsListSuccess} from '../../../constants/actions/InstitutionResultsList/actions'
import {countryResultsListRequest, countryResultsListSuccess} from '../../../constants/actions/CountryResultsList/actions'

import {globalError} from '../../../constants/actions/GlobalMessages/actions'
import DummyInstitutionResultsList from '../../Views/InstitutionResultsList/component.js'
import {
        TYPE_FIELD,
        TYPE_INSTITUTION,
        TYPE_COUNTRY
} from '../../../constants/action-types/store'

function mapStateToProps(store) {
    return {resultsList: store.get('ResultsList')}

}

class SmartInstitutionResultList extends Component {

  constructor(){
    super();
    this.state = {
      currentCategory: 'Schools',
      category: 'Schools',
      oldString: '',
      currentString: '',
      timerId: '',
      currentParamList:[],
      currentParamsQuery:[]
    }
  }

  componentDidMount = () => {
      var dispatch = this.props.dispatch

      dispatch(institutionResultsListRequest())

      var syllabusHTTPServicePromise = syllabusHTTPService.getInstitutionResultsList({page:[1]})

      syllabusHTTPServicePromise.then( (response) => {
        let hitsConcat = response.data.hits[0].concat(response.data.hits[1])
          dispatch(institutionResultsListSuccess(hitsConcat))
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
      () => this.makeRequest('Schools')
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
    if(this.state.currentString !== '' || type === "Schools"){

    let category = (type) ? type : this.state.currentCategory

    let syllabusHTTPServicePromise,
        dispatch = this.props.dispatch,
        string = (type !== "Schools" || this.state.currentCategory !== "Schools") ? [] : [this.state.currentString];

      switch (category) {
        case 'Schools':
        dispatch(institutionResultsListRequest())
        syllabusHTTPServicePromise = syllabusHTTPService.getInstitutionResultsList({
          query: string,
          field:this.createQuery('Fields'),
          country: this.createQuery('Countries')
        })
        syllabusHTTPServicePromise.then( (response) => {
          let hitsConcat = response.data.hits[0].concat(response.data.hits[1])
            dispatch(institutionResultsListSuccess(hitsConcat))
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
          <DummyInstitutionResultsList
            currentCategory={this.getCurrentFilterCategory}
            category={this.state.category}
            inputString={this.getString}
            makeSearch={this.makeRequest} store={this.props.resultsList.getIn([TYPE_INSTITUTION, 'data']).toJS()}
            currentParamData={this.state.currentParamList}
            currentParamsQuery={this.getCurrentParamsQuery}
          />
        </div>
      )
  }
}

export default connect(mapStateToProps)(SmartInstitutionResultList)
