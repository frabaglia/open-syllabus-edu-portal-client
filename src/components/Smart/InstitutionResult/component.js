import React, {Component} from 'react';
// import './component.sass';
import {connect} from 'react-redux'
import {syllabusLinker} from '../../../utils/SyllabusLinker/component'
import {syllabusHTTPService} from '../../../utils/SyllabusHTTPService/component'

import {institutionResultRequest, institutionResultSuccess} from '../../../actions/InstitutionResult/actions'


import {resultsListError} from '../../../actions/GlobalMessages/actions'
import DummyInstitutionResult from '../../Views/InstitutionResult/component.js'
import {  TYPE_TITLE,
          TYPE_AUTHOR,
          TYPE_FIELD,
          TYPE_INSTITUTION,
          TYPE_COUNTRY
        } from '../../../store/storeTypes'

function mapStateToProps(store) {
    return {resultsList: store.get('ResultsList')}

}

class SmartInstitutionResult extends Component {



  componentDidMount = () => {
      let dispatch = this.props.dispatch;


      dispatch(institutionResultRequest())

      let syllabusHTTPServicePromise = syllabusHTTPService.getInstitutionResult(this.props.location.query.id)

      syllabusHTTPServicePromise.then( (response) => {
          dispatch(institutionResultSuccess(response.data))
      }).catch(function(error) {
          dispatch(resultsListError(error))
      })
  }

  render() {
      return (
        <div>
          <DummyInstitutionResult/>
        </div>
      )
  }
}

export default connect(mapStateToProps)(SmartInstitutionResult)
