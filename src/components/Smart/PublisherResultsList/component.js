import React, {Component} from 'react';
// import './component.sass';
import {connect} from 'react-redux'
import {syllabusHTTPService} from '../../../os-toolkit/SyllabusHTTPService/component'

import {publisherResultsListRequest, publisherResultsListSuccess} from '../../../constants/actions/PublisherResultsList'
import {fieldResultsListRequest, fieldResultsListSuccess} from '../../../constants/actions/FieldResultsList'
import {countryResultsListRequest, countryResultsListSuccess} from '../../../constants/actions/CountryResultsList'

import {globalError} from '../../../constants/actions/GlobalMessages'
import DummyPublisherResultsList from '../../Views/PublisherResultsList/component.js'
import {
        TYPE_FIELD,
        TYPE_PUBLISHER,
        TYPE_COUNTRY
} from '../../../store/storeTypes'

function mapStateToProps(store) {
    return {resultsList: store.get('ResultsList')}

}

class SmartPublisherResultList extends Component {

  constructor(){
    super();
    this.state = {
      currentCategory: 'Publisher',
      category: 'Publisher',
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

      dispatch(publisherResultsListRequest())

      var syllabusHTTPServicePromise = syllabusHTTPService.getPublisherResultsList({page:[this.state.pagination]})

      syllabusHTTPServicePromise.then( (response) => {
        let hitsConcat = response.data.hits[0].concat(response.data.hits[1])
          dispatch(publisherResultsListSuccess(hitsConcat))
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
    console.log(paramsList,'cambio en params',this.state.currentParamsQuery);
    let paramQuery;
    if(paramsList.length) paramQuery = paramsList
    else paramQuery = [];
    this.setState({currentParamsQuery:paramQuery, currentParamList:[], pagination:1},
      () => this.makeRequest('Publisher')
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
    if(this.state.currentString !== '' || type === "Publisher"){

    let category = (type) ? type : this.state.currentCategory

    let syllabusHTTPServicePromise,
        dispatch = this.props.dispatch,
        string = (type !== "Publisher" || this.state.currentCategory !== "Publisher") ? [] : [this.state.currentString];

      switch (category) {
        case 'Publisher':
        dispatch(publisherResultsListRequest())
        syllabusHTTPServicePromise = syllabusHTTPService.getPublisherResultsList({
          page:[this.state.pagination],
          query: string,
          field:this.createQuery('Field'),
          country: this.createQuery('Country'),
          pub_year_start: this.createQuery('pub_year_start'),
          pub_year_end: this.createQuery('pub_year_end'),
          class_year_start: this.createQuery('class_year_start'),
          class_year_end: this.createQuery('class_year_end'),
          open_access: this.createQuery('open_access')
        })
        syllabusHTTPServicePromise.then( (response) => {
          let hitsConcat = response.data.hits[0].concat(response.data.hits[1])
            dispatch(publisherResultsListSuccess(hitsConcat))
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

  pagination = () => this.setState({pagination:this.state.pagination+1}, () => this.makeRequest("Publisher"))

  componentWillUnmount = () =>{
    clearInterval(this.state.timerId);
  }

  render() {
      return (
        <div>
          <DummyPublisherResultsList
            currentCategory={this.getCurrentFilterCategory}
            category={this.state.category}
            inputString={this.getString}
            makeSearch={this.makeRequest} store={this.props.resultsList.getIn([TYPE_PUBLISHER, 'data']).toJS()}
            currentParamData={this.state.currentParamList}
            currentParamsQuery={this.getCurrentParamsQuery}
            pagination={this.pagination}
          />
        </div>
      )
  }
}

export default connect(mapStateToProps)(SmartPublisherResultList)
