import React, {Component} from 'react';
// import './component.sass';
import {connect} from 'react-redux'
import {syllabusLinker} from '../../../utils/SyllabusLinker/component'
import {syllabusHTTPService} from '../../../utils/SyllabusHTTPService/component'

import {authorResultRequest, authorResultSuccess} from '../../../actions/AuthorResult/actions'
import $ from "jquery"


import {globalError} from '../../../actions/GlobalMessages/actions'
import DummyAuthorResult from '../../Views/AuthorResult/component.js'
import { TYPE_AUTHOR } from '../../../store/storeTypes'

function mapStateToProps(store) {
    return {result: store.get('Result')}

}

class SmartAuthorResult extends Component {

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

      dispatch(authorResultRequest())

      let syllabusHTTPServicePromise = syllabusHTTPService.getAuthorResultNormalized(this.props.location.query.id)

      syllabusHTTPServicePromise.then( (response) => {
          dispatch(authorResultSuccess(response.data))
      }).catch(function(error) {
          dispatch(globalError(error))
      })
    }
    else {
      let dispatch = this.props.dispatch;

      dispatch(authorResultRequest())

      let syllabusHTTPServicePromise = syllabusHTTPService.getAuthorResult(this.props.location.query.id)

      syllabusHTTPServicePromise.then( (response) => {
          dispatch(authorResultSuccess(response.data))
      }).catch(function(error) {
          dispatch(globalError(error))
      })
    }
  }

  getDataNormalizedOrRAW = (dataType) =>{
    this.makeRequest(dataType);
  }

  renderDummyAuthorResult = () =>{
    return ($.isEmptyObject(this.props.result.getIn([TYPE_AUTHOR, 'data']).toJS())) ? (<div></div>) : (<DummyAuthorResult store={this.props.result.getIn([TYPE_AUTHOR, 'data']).toJS()} getDataNormalizedOrRAW={this.getDataNormalizedOrRAW}/>);
  }

  render() {
      return (
        <div>
          {this.renderDummyAuthorResult()}
        </div>
      )
  }
}

export default connect(mapStateToProps)(SmartAuthorResult)
