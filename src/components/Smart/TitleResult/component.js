import React, {Component} from 'react';
import {connect} from 'react-redux'
import {syllabusHTTPService} from '../../../os-toolkit/SyllabusHTTPService/component'

import {titleResultRequest, titleResultSuccess} from '../../../constants/actions/TitleResult'


import {resultsListError} from '../../../constants/actions/GlobalMessages'
import DummyTitleResult from '../../Views/TitleResult/component.js'
import {  TYPE_TITLE,
          TYPE_AUTHOR,
          TYPE_FIELD,
          TYPE_INSTITUTION,
          TYPE_COUNTRY
        } from '../../../constants/action-types/store'

function mapStateToProps(store) {
    return {resultsList: store.get('ResultsList')}

}

class SmartTitleResult extends Component {



  componentDidMount = () => {
      let dispatch = this.props.dispatch;


      dispatch(titleResultRequest())

      let syllabusHTTPServicePromise = syllabusHTTPService.getTitleResult(this.props.location.query.id)

      syllabusHTTPServicePromise.then( (response) => {
          dispatch(titleResultSuccess(response.data))
      }).catch(function(error) {
          dispatch(resultsListError(error))
      })
  }

  render() {
      return (
        <div>
          <DummyTitleResult/>
        </div>
      )
  }
}

export default connect(mapStateToProps)(SmartTitleResult)
