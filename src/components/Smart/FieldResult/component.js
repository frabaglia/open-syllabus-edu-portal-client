import React, {Component} from 'react';
import {connect} from 'react-redux'
import {syllabusHTTPService} from '../../../os-toolkit/SyllabusHTTPService/component'

import {fieldResultRequest, fieldResultSuccess} from '../../../constants/actions/FieldResult'


import {resultsListError} from '../../../constants/actions/GlobalMessages'
import DummyFieldResult from '../../Views/FieldResult/component.js'
import {  TYPE_TITLE,
          TYPE_AUTHOR,
          TYPE_FIELD,
          TYPE_INSTITUTION,
          TYPE_COUNTRY
        } from '../../../constants/action-types/store'

function mapStateToProps(store) {
    return {resultsList: store.get('ResultsList')}

}

class SmartFieldResult extends Component {



  componentDidMount = () => {
      let dispatch = this.props.dispatch;


      dispatch(fieldResultRequest())

      let syllabusHTTPServicePromise = syllabusHTTPService.getFieldResult(this.props.location.query.id)

      syllabusHTTPServicePromise.then( (response) => {
          dispatch(fieldResultSuccess(response.data))
      }).catch(function(error) {
          dispatch(resultsListError(error))
      })
  }

  render() {
      return (
        <div>
          <DummyFieldResult/>
        </div>
      )
  }
}

export default connect(mapStateToProps)(SmartFieldResult)
