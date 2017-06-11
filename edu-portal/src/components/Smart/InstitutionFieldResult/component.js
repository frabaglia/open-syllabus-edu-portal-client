import React, {Component} from 'react';
// import './component.sass';
import {connect} from 'react-redux'
import {syllabusLinker} from '../../../utils/SyllabusLinker/component'
import {syllabusHTTPService} from '../../../utils/SyllabusHTTPService/component'

import {institutionFieldResultRequest, institutionFieldResultSuccess} from '../../../actions/InstitutionFieldResult/actions'
import $ from "jquery"


import {globalError} from '../../../actions/GlobalMessages/actions'
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
          dispatch(globalError(error))
      })
    }
    else {
      let dispatch = this.props.dispatch;

      dispatch(institutionFieldResultRequest())

      let syllabusHTTPServicePromise = syllabusHTTPService.getInstitutionFieldResult(this.props.location.query.id)

      syllabusHTTPServicePromise.then( (response) => {
          dispatch(institutionFieldResultSuccess(response.data))
      }).catch(function(error) {
          dispatch(globalError(error))
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
