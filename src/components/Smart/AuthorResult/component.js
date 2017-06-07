import React, {Component} from 'react';
import {connect} from 'react-redux'
import {syllabusHTTPService} from '../../../utils/SyllabusHTTPService/component'

import {authorResultRequest, authorResultSuccess} from '../../../constants/actions/AuthorResult/actions'


import {resultsListError} from '../../../constants/actions/GlobalMessages/actions'
import DummyAuthorResult from '../../Views/AuthorResult/component.js'
import {  TYPE_TITLE,
          TYPE_AUTHOR,
          TYPE_FIELD,
          TYPE_INSTITUTION,
          TYPE_COUNTRY
        } from '../../../constants/action-types/store'

function mapStateToProps(store) {
    return {resultsList: store.get('ResultsList')}

}

class SmartAuthorResult extends Component {



  componentDidMount = () => {
      let dispatch = this.props.dispatch;


      dispatch(authorResultRequest())

      let syllabusHTTPServicePromise = syllabusHTTPService.getAuthorResult(this.props.location.query.id)

      syllabusHTTPServicePromise.then( (response) => {
          dispatch(authorResultSuccess(response.data))
      }).catch(function(error) {
          dispatch(resultsListError(error))
      })
  }

  render() {
      return (
        <div>
          <DummyAuthorResult/>
        </div>
      )
  }
}

export default connect(mapStateToProps)(SmartAuthorResult)
