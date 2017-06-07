import React, {Component} from 'react';
// import './component.sass';
import {connect} from 'react-redux'
import {syllabusLinker} from '../../../utils/SyllabusLinker/component'
import {syllabusHTTPService} from '../../../utils/SyllabusHTTPService/component'

import {institutionFieldResultRequest, institutionFieldResultSuccess} from '../../../actions/InstitutionFieldResult/actions'


import {resultsListError} from '../../../actions/GlobalMessages/actions'
import DummyInstitutionFieldResult from '../../Views/InstitutionFieldResult/component.js'
import {  TYPE_TITLE,
          TYPE_AUTHOR,
          TYPE_FIELD,
          TYPE_INSTITUTION,
          TYPE_COUNTRY
        } from '../../../store/storeTypes'

function mapStateToProps(store) {
    return {resultsList: store.get('ResultsList')}

}

class SmartInstitutionFieldResult extends Component {



  componentDidMount = () => {
      let dispatch = this.props.dispatch;


      dispatch(institutionFieldResultRequest())

      let syllabusHTTPServicePromise = syllabusHTTPService.getInstitutionFieldResult(1)

      syllabusHTTPServicePromise.then( (response) => {
          dispatch(institutionFieldResultSuccess(response.data))
      }).catch(function(error) {
          dispatch(resultsListError(error))
      })
  }

  render() {
      return (
        <div>
          <DummyInstitutionFieldResult/>
        </div>
      )
  }
}

export default connect(mapStateToProps)(SmartInstitutionFieldResult)
