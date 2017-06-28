import React, {Component} from 'react';
// import './component.sass';
import {connect} from 'react-redux'
import $ from "jquery"
import {syllabusHTTPService} from '../../../os-toolkit/SyllabusExplorerHTTPService'

import {institutionFieldResultRequest, institutionFieldResultSuccess} from '../../../constants/actions/InstitutionFieldResult'


import {resultsListError} from '../../../constants/actions/GlobalMessages'
import DummyInstitutionFieldResult from '../../Views/InstitutionFieldResult/component.js'
import {  TYPE_INSTITUTION_FIELD } from '../../../store/storeTypes'

function mapStateToProps(store) {
    return {result: store.get('Result')}

}

class SmartInstitutionFieldResult extends Component {



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

      dispatch(institutionFieldResultRequest())

      let syllabusHTTPServicePromise = syllabusHTTPService.getInstitutionFieldResultNormalized(this.props.location.query.id)

      syllabusHTTPServicePromise.then( (response) => {
          dispatch(institutionFieldResultSuccess(response.data))
      }).catch(function(error) {
          dispatch(resultsListError(error))
      })
    }
    else {
      let dispatch = this.props.dispatch;

      dispatch(institutionFieldResultRequest())

      let syllabusHTTPServicePromise = syllabusHTTPService.getInstitutionFieldResult(this.props.location.query.id)

      syllabusHTTPServicePromise.then( (response) => {
          dispatch(institutionFieldResultSuccess(response.data))
      }).catch(function(error) {
          dispatch(resultsListError(error))
      })
    }
  }

  getDataNormalizedOrRAW = (dataType) =>{
    this.makeRequest(dataType);
  }

  renderDummyInstitutionFieldResult = () =>{
    return ($.isEmptyObject(this.props.result.getIn([TYPE_INSTITUTION_FIELD, 'data']))) ? (<div></div>) : (<DummyInstitutionFieldResult store={this.props.result.getIn([TYPE_INSTITUTION_FIELD, 'data']).toJS()} getDataNormalizedOrRAW={this.getDataNormalizedOrRAW}/>);
  }

  render() {
      return (
        <div>
          {this.renderDummyInstitutionFieldResult()}
        </div>
      )
  }
}

export default connect(mapStateToProps)(SmartInstitutionFieldResult)
