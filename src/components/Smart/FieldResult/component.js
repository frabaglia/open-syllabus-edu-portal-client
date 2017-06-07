import React, {Component} from 'react';
// import './component.sass';
import {connect} from 'react-redux'
import {syllabusLinker} from '../../../utils/SyllabusLinker/component'
import {syllabusHTTPService} from '../../../utils/SyllabusHTTPService/component'

import {fieldResultRequest, fieldResultSuccess} from '../../../actions/FieldResult/actions'


import {resultsListError} from '../../../actions/GlobalMessages/actions'
import DummyFieldResult from '../../Views/FieldResult/component.js'
import {  TYPE_TITLE,
          TYPE_AUTHOR,
          TYPE_FIELD,
          TYPE_INSTITUTION,
          TYPE_COUNTRY
        } from '../../../store/storeTypes'

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
