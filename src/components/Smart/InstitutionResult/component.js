import React, {Component} from 'react';
import $ from 'jquery'
import {connect} from 'react-redux'
import {syllabusHTTPService} from '../../../os-toolkit/SyllabusHTTPService/component'

import {institutionResultRequest, institutionResultSuccess} from '../../../constants/actions/InstitutionResult'


import {resultsListError} from '../../../constants/actions/GlobalMessages'
import DummyInstitutionResult from '../../Views/InstitutionResult/component.js'
import {  TYPE_TITLE,
          TYPE_AUTHOR,
          TYPE_FIELD,
          TYPE_INSTITUTION,
          TYPE_COUNTRY
        } from '../../../store/storeTypes'

function mapStateToProps(store) {
    return {result: store.get('Result')}

}

class SmartInstitutionResult extends Component {


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

      dispatch(institutionResultRequest())

      let syllabusHTTPServicePromise = syllabusHTTPService.getInstitutionResultNormalized(this.props.location.query.id)

      syllabusHTTPServicePromise.then( (response) => {
          dispatch(institutionResultSuccess(response.data))
      }).catch(function(error) {
          dispatch(resultsListError(error))
      })
    }
    else {
      let dispatch = this.props.dispatch;

      dispatch(institutionResultRequest())

      let syllabusHTTPServicePromise = syllabusHTTPService.getInstitutionResult(this.props.location.query.id)

      syllabusHTTPServicePromise.then( (response) => {
          dispatch(institutionResultSuccess(response.data))
      }).catch(function(error) {
          dispatch(resultsListError(error))
      })
    }
  }

  getDataNormalizedOrRAW = (dataType) =>{
    this.makeRequest(dataType);
  }

  renderDummyAuthorResult = () =>{
    return ($.isEmptyObject(this.props.result.getIn([TYPE_INSTITUTION, 'data']).toJS())) ? (<div></div>) : (<DummyInstitutionResult store={this.props.result.getIn([TYPE_INSTITUTION, 'data']).toJS()} router={this.props.router} getDataNormalizedOrRAW={this.getDataNormalizedOrRAW}/>);
  }

  render() {
      return (
        <div>
          {this.renderDummyAuthorResult()}
        </div>
      )
  }
}

export default connect(mapStateToProps)(SmartInstitutionResult)
