import React, {Component} from 'react';
// import './component.sass';
import {connect} from 'react-redux'
import {syllabusLinker} from '../../../utils/SyllabusLinker/component'
import {syllabusHTTPService} from '../../../utils/SyllabusHTTPService/component'

import {authorResultRequest, authorResultSuccess} from '../../../actions/AuthorResult/actions'


import {resultsListError} from '../../../actions/GlobalMessages/actions'
import DummyAuthorResult from '../../Views/AuthorResult/component.js'
import {  TYPE_TITLE,
          TYPE_AUTHOR,
          TYPE_FIELD,
          TYPE_INSTITUTION,
          TYPE_COUNTRY
        } from '../../../store/storeTypes'

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
