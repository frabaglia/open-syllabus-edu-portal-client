import React, {Component} from 'react';
// import './component.sass';
import {connect} from 'react-redux'
import {syllabusLinker} from '../../../utils/SyllabusLinker/component'
import {syllabusHTTPService} from '../../../utils/SyllabusHTTPService/component'

import {titleResultRequest, titleResultSuccess} from '../../../actions/TitleResult/actions'


import {resultsListError} from '../../../actions/GlobalMessages/actions'
import DummyTitleResult from '../../Views/TitleResult/component.js'
import {  TYPE_TITLE,
          TYPE_AUTHOR,
          TYPE_FIELD,
          TYPE_INSTITUTION,
          TYPE_COUNTRY
        } from '../../../store/storeTypes'

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
