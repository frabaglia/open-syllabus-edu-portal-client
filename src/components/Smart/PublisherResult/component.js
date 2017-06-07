import React, {Component} from 'react';
// import './component.sass';
import {connect} from 'react-redux'
import {syllabusLinker} from '../../../utils/SyllabusLinker/component'
import {syllabusHTTPService} from '../../../utils/SyllabusHTTPService/component'

import {publisherResultRequest, publisherResultSuccess} from '../../../actions/PublisherResult/actions'


import {resultsListError} from '../../../actions/GlobalMessages/actions'
import DummyPublisherResult from '../../Views/PublisherResult/component.js'
import {  TYPE_TITLE,
          TYPE_AUTHOR,
          TYPE_FIELD,
          TYPE_INSTITUTION,
          TYPE_COUNTRY
        } from '../../../store/storeTypes'

function mapStateToProps(store) {
    return {resultsList: store.get('ResultsList')}

}

class SmartPublisherResult extends Component {



  componentDidMount = () => {
      let dispatch = this.props.dispatch;


      dispatch(publisherResultRequest())

      let syllabusHTTPServicePromise = syllabusHTTPService.getPublisherResult(this.props.location.query.id)

      syllabusHTTPServicePromise.then( (response) => {
          dispatch(publisherResultSuccess(response.data))
      }).catch(function(error) {
          dispatch(resultsListError(error))
      })
  }

  render() {
      return (
        <div>
          <DummyPublisherResult/>
        </div>
      )
  }
}

export default connect(mapStateToProps)(SmartPublisherResult)
