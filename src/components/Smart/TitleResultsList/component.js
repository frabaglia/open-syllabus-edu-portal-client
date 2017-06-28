import React, {Component} from 'react';
// import './component.sass';
import {connect} from 'react-redux'
import {syllabusHTTPService} from '../../../os-toolkit/SyllabusExplorerHTTPService'

import {titleResultsListRequest, titleResultsListSuccess} from '../../../constants/actions/TitleResultsList'
import {authorResultsListRequest, authorResultsListSuccess} from '../../../constants/actions/AuthorResultsList'
import {fieldResultsListRequest, fieldResultsListSuccess} from '../../../constants/actions/FieldResultsList'
import {institutionResultsListRequest, institutionResultsListSuccess} from '../../../constants/actions/InstitutionResultsList'
import {countryResultsListRequest, countryResultsListSuccess} from '../../../constants/actions/CountryResultsList'

import {globalError} from '../../../constants/actions/GlobalMessages'
import DummyTitleResultsList from '../../Views/TitleResultsList/component.js'
import {  TYPE_TITLE,
          TYPE_AUTHOR,
          TYPE_FIELD,
          TYPE_INSTITUTION,
          TYPE_COUNTRY
        } from '../../../store/storeTypes'


// User gets into Title results list.
//
// On component mount, the UI fetch:
//   - Title (0-200 paginationI) of +2M set.
//   - Author (0-200 pagination) of maybe +500.000 set.
//   - Institutions.
//   - Field.
//   - Country.
//
// If user decides to filter by: Author, Institution, Field or Country:
//   -UI makes an HTTP request using the user input, on a 2 second debounce rate (if you click SEARCH, you avoid this debounce timing), as a query param for the GET request.
//   -UI shows to the user this new content.
//   -UI do this up to user decides to press enter (to select the first element of the list) or goes and click exactly the entity he wants to filter by.
//   -The id of the selected entity is used as a query param for all the next requests.
//
// If user decides to filter by Title:
//   -UI makes an HTTP request using the user input, on a 2 second debounce rate (if you click SEARCH, you avoid this debounce timing), as a query param for the GET request.
//   -UI shows the user this new content on the Title results list itself, because the user can’t select this as a filter.

function mapStateToProps(store) {
    return {resultsList: store.get('ResultsList')}

}

class SmartTitleResultList extends Component {

  constructor(){
    super();
    this.state = {
      currentCategory: 'Title',
      category: 'Title',
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

      dispatch(titleResultsListRequest())

      var syllabusHTTPServicePromise = syllabusHTTPService.getTitleResultsList({page:[this.state.pagination]})

      syllabusHTTPServicePromise.then( (response) => {
        let hitsConcat = response.data.hits[0].concat(response.data.hits[1])
          dispatch(titleResultsListSuccess(hitsConcat))
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
      () => this.makeRequest('Title')
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
    if(this.state.currentString !== '' || type === "Title"){

    let category = (type) ? type : this.state.currentCategory

    let syllabusHTTPServicePromise,
        dispatch = this.props.dispatch,
        string = (type !== "Title" || this.state.currentCategory !== "Title") ? [] : [this.state.currentString];

      switch (category) {
        case 'Title':
        dispatch(titleResultsListRequest())
        syllabusHTTPServicePromise = syllabusHTTPService.getTitleResultsList({
          page:[this.state.pagination],
          query: string,
          author: this.createQuery('Author'),
          field:this.createQuery('Field'),
          institution: this.createQuery('School'),
          country: this.createQuery('Country'),
          pub_year_start: this.createQuery('pub_year_start'),
          pub_year_end: this.createQuery('pub_year_end'),
          class_year_start: this.createQuery('class_year_start'),
          class_year_end: this.createQuery('class_year_end'),
          inst_type: this.createQuery('inst_type'),
          open_access: this.createQuery('open_access'),
          us_state: this.createQuery('us_state'),
        })
        syllabusHTTPServicePromise.then( (response) => {
          let hitsConcat = response.data.hits[0].concat(response.data.hits[1])
            dispatch(titleResultsListSuccess(hitsConcat))
        }).catch(function(error) {
            dispatch(globalError(error))
        })
        break;

        case 'Author':
          dispatch(authorResultsListRequest());
          syllabusHTTPServicePromise = syllabusHTTPService.getAuthorResultsList({query: [this.state.currentString]})

          syllabusHTTPServicePromise.then(function(response) {
            let hitsConcat = response.data.hits[0].concat(response.data.hits[1])
              dispatch(authorResultsListSuccess(hitsConcat))
          }).catch(function(error) {
              dispatch(globalError(error))
          })
          this.setState({currentParamList:this.props.resultsList.getIn([TYPE_AUTHOR, 'data']).toJS()})
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

  pagination = () => this.setState({pagination:this.state.pagination+1}, () => this.makeRequest("Title"))

  componentWillUnmount = () =>{
    clearInterval(this.state.timerId);
  }

  render() {
      return (
        <div>
          <DummyTitleResultsList
            currentCategory={this.getCurrentFilterCategory}
            category={this.state.category}
            inputString={this.getString}
            makeSearch={this.makeRequest}
            store={this.props.resultsList.getIn([TYPE_TITLE, 'data']).toJS()}
            currentParamData={this.state.currentParamList}
            currentParamsQuery={this.getCurrentParamsQuery}
            pagination={this.pagination}
          />
        </div>
      )
  }
}

export default connect(mapStateToProps)(SmartTitleResultList)
