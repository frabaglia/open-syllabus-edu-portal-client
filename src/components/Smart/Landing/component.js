import React, {Component} from 'react';
import {connect} from 'react-redux'
import DummyLanding from '../../Views/Landing/component.js'




import {
    TYPE_TITLE,
    TYPE_AUTHOR,
    TYPE_INSTITUTION,
    TYPE_FIELD,
    TYPE_COUNTRY,
    TYPE_PUBLISHER,
    // TYPE_INSTITUTION_FIELD
} from '../../../constants/action-types/store'

import {syllabusHTTPService} from '../../../utils/SyllabusHTTPService/component'
import {
  mostFrecuentTypeUpdate,
  mostFrecuentTitleRequest,
  mostFrecuentTitleSuccess,
  mostFrecuentAuthorRequest,
  mostFrecuentAuthorSuccess,
  mostFrecuentFieldRequest,
  mostFrecuentFieldSuccess,
  mostFrecuentInstitutionRequest,
  mostFrecuentInstitutionSuccess,
  mostFrecuentCountryRequest,
  mostFrecuentCountrySuccess,
  mostFrecuentPublisherRequest,
  mostFrecuentPublisherSuccess,
} from '../../../constants/actions/Landing/actions'
import {resultsListError} from '../../../constants/actions/GlobalMessages/actions'

function mapStateToProps(store) {
    return {landing: store.get('Landing')}
}

class SmartLanding extends Component {

  componentDidMount = () => {
      let dispatch = this.props.dispatch;
      if(!this.props.landing.getIn(['mostFrecuent','updatedAt']))
      {
        dispatch(mostFrecuentTitleRequest())

        let syllabusHTTPServicePromise = syllabusHTTPService.getMostFrecuentTitles()

        syllabusHTTPServicePromise.then( (response) => {
          dispatch(mostFrecuentTypeUpdate(TYPE_TITLE))
            dispatch(mostFrecuentTitleSuccess(response.data))
        }).catch( (error) => {
            dispatch(resultsListError(error))
        })

      }
  }

  makeRequest = (category) =>
  {
    let dispatch = this.props.dispatch,
        syllabusHTTPServicePromise;

    switch (category) {
      case TYPE_TITLE:
        dispatch(mostFrecuentTitleRequest())

        syllabusHTTPServicePromise = syllabusHTTPService.getMostFrecuentTitles()

        syllabusHTTPServicePromise.then( (response) => {
            dispatch(mostFrecuentTitleSuccess(response.data))
            dispatch(mostFrecuentTypeUpdate(TYPE_TITLE))
        }).catch( (error) => {
            dispatch(resultsListError(error))
        })
      break;

      case TYPE_AUTHOR:
        dispatch(mostFrecuentAuthorRequest())

        syllabusHTTPServicePromise = syllabusHTTPService.getMostFrecuentAuthors()

        syllabusHTTPServicePromise.then( (response) => {
            dispatch(mostFrecuentAuthorSuccess(response.data))
            dispatch(mostFrecuentTypeUpdate(TYPE_AUTHOR))
        }).catch( (error) => {
            dispatch(resultsListError(error))
        })
      break;

      case TYPE_FIELD:
        dispatch(mostFrecuentFieldRequest())

        syllabusHTTPServicePromise = syllabusHTTPService.getMostFrecuentFields()

        syllabusHTTPServicePromise.then( (response) => {
            dispatch(mostFrecuentFieldSuccess(response.data))
            dispatch(mostFrecuentTypeUpdate(TYPE_FIELD))
        }).catch( (error) => {
            dispatch(resultsListError(error))
        })
      break;

      case TYPE_INSTITUTION:
        dispatch(mostFrecuentInstitutionRequest())

        syllabusHTTPServicePromise = syllabusHTTPService.getMostFrecuentInstitutions()

        syllabusHTTPServicePromise.then( (response) => {
            dispatch(mostFrecuentInstitutionSuccess(response.data))
            dispatch(mostFrecuentTypeUpdate(TYPE_INSTITUTION))
        }).catch( (error) => {
            dispatch(resultsListError(error))
        })
      break;

      case TYPE_COUNTRY:
        dispatch(mostFrecuentCountryRequest())

        syllabusHTTPServicePromise = syllabusHTTPService.getMostFrecuentCountries()

        syllabusHTTPServicePromise.then( (response) => {
            dispatch(mostFrecuentCountrySuccess(response.data))
            dispatch(mostFrecuentTypeUpdate(TYPE_COUNTRY))
        }).catch( (error) => {
            dispatch(resultsListError(error))
        })
      break;

      case TYPE_PUBLISHER:
        dispatch(mostFrecuentPublisherRequest())

        syllabusHTTPServicePromise = syllabusHTTPService.getMostFrecuentPublishers()

        syllabusHTTPServicePromise.then( (response) => {
            dispatch(mostFrecuentPublisherSuccess(response.data))
            dispatch(mostFrecuentTypeUpdate(TYPE_PUBLISHER))
        }).catch( (error) => {
            dispatch(resultsListError(error))
        })
      break;

      default:
    }
  }

  changeCurrentCategoryType = (category) => this.makeRequest(category)

  render() {
    let category = this.props.landing.getIn(['mostFrecuent','current'])
      return (
        <div>
          <DummyLanding
            router={this.props.router}
            changeCurrentCategoryType={this.changeCurrentCategoryType}
            currentCategoryType={this.props.landing.getIn(['mostFrecuent','current'])}
            currentCategoryData={this.props.landing.getIn(['mostFrecuent',`${category}`,'data']).toJS()}
          />
        </div>
      )
  }
}

export default connect(mapStateToProps)(SmartLanding)
