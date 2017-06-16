import React, {Component} from 'react';
import {connect} from 'react-redux'
import {syllabusHTTPService} from '../../../os-toolkit/SyllabusHTTPService/component'

import {publisherResultRequest, publisherResultSuccess} from '../../../constants/actions/PublisherResult'


import {resultsListError} from '../../../constants/actions/GlobalMessages'
import DummyPublisherResult from '../../Views/PublisherResult/component.js'
import {  TYPE_TITLE,
          TYPE_AUTHOR,
          TYPE_FIELD,
          TYPE_INSTITUTION,
          TYPE_COUNTRY
        } from '../../../constants/action-types/store'

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
