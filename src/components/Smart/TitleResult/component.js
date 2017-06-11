import React, {Component} from 'react';
// import './component.sass';
import {connect} from 'react-redux'
import {syllabusLinker} from '../../../utils/SyllabusLinker/component'
import {syllabusHTTPService} from '../../../utils/SyllabusHTTPService/component'

import {titleResultRequest, titleResultSuccess} from '../../../actions/TitleResult/actions'
import $ from "jquery"


import {globalError} from '../../../actions/GlobalMessages/actions'
import DummyTitleResult from '../../Views/TitleResult/component.js'
import {  TYPE_TITLE,
          TYPE_AUTHOR,
          TYPE_FIELD,
          TYPE_INSTITUTION,
          TYPE_COUNTRY
        } from '../../../store/storeTypes'

function mapStateToProps(store) {
    return {result: store.get('Result')}

}

class SmartTitleResult extends Component {

  constructor (){
    super();
    this.state ={
      typeData: "Normalized"
    }
  }


  componentWillMount = () => {
    this.makeRequest("Normalized")
  }

  makeRequest = (dataType) =>{
    if(dataType === "Normalized"){
      let dispatch = this.props.dispatch;

      dispatch(titleResultRequest())

      let syllabusHTTPServicePromise = syllabusHTTPService.getTitleResultNormalized(this.props.location.query.id)

      syllabusHTTPServicePromise.then( (response) => {
          dispatch(titleResultSuccess(response.data))
      }).catch(function(error) {
          dispatch(globalError(error))
      })
    }
    else {
      let dispatch = this.props.dispatch;

      dispatch(titleResultRequest())

      let syllabusHTTPServicePromise = syllabusHTTPService.getTitleResult(this.props.location.query.id)

      syllabusHTTPServicePromise.then( (response) => {
          dispatch(titleResultSuccess(response.data))
      }).catch(function(error) {
          dispatch(globalError(error))
      })
    }
  }

  getDataNormalizedOrRAW = (dataType) =>{
    this.makeRequest(dataType);
  }

  renderDummyTitleResult = () =>{
    return ($.isEmptyObject(this.props.result.getIn([TYPE_TITLE, 'data']).toJS())) ? (<div></div>) : (<DummyTitleResult store={this.props.result.getIn([TYPE_TITLE, 'data']).toJS()} getDataNormalizedOrRAW={this.getDataNormalizedOrRAW}/>);
  }

  render() {
      return (
        <div>
          {this.renderDummyTitleResult()}
        </div>
      )
  }
}

export default connect(mapStateToProps)(SmartTitleResult)
