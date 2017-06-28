import React, {Component} from 'react';
// import './component.sass';
import {connect} from 'react-redux'
import $ from 'jquery'
import {syllabusHTTPService} from '../../../os-toolkit/SyllabusExplorerHTTPService'

import {fieldResultRequest, fieldResultSuccess} from '../../../constants/actions/FieldResult'


import {resultsListError} from '../../../constants/actions/GlobalMessages'
import DummyFieldResult from '../../Views/FieldResult/component.js'
import {  TYPE_TITLE,
          TYPE_AUTHOR,
          TYPE_FIELD,
          TYPE_INSTITUTION,
          TYPE_COUNTRY
        } from '../../../store/storeTypes'

function mapStateToProps(store) {
    return {result: store.get('Result')}

}

class SmartFieldResult extends Component {

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

      dispatch(fieldResultRequest())

      let syllabusHTTPServicePromise = syllabusHTTPService.getFieldResultNormalized(this.props.location.query.id)

      syllabusHTTPServicePromise.then( (response) => {
          dispatch(fieldResultSuccess(response.data))
      }).catch(function(error) {
          dispatch(resultsListError(error))
      })
    }
    else {
      let dispatch = this.props.dispatch;

      dispatch(fieldResultRequest())

      let syllabusHTTPServicePromise = syllabusHTTPService.getFieldResult(this.props.location.query.id)

      syllabusHTTPServicePromise.then( (response) => {
          dispatch(fieldResultSuccess(response.data))
      }).catch(function(error) {
          dispatch(resultsListError(error))
      })
    }
  }

  getDataNormalizedOrRAW = (dataType) =>{
    this.makeRequest(dataType);
  }
  renderDummyFieldResult = () =>{
    return ($.isEmptyObject(this.props.result.getIn([TYPE_FIELD, 'data']).toJS())) ? (<div></div>) : (<DummyFieldResult store={this.props.result.getIn([TYPE_FIELD, 'data']).toJS()} getDataNormalizedOrRAW={this.getDataNormalizedOrRAW}/>);
  }

  render() {
    console.log(this.props.result.getIn([TYPE_FIELD, 'data']).toJS());
      return (
        <div>
          {this.renderDummyFieldResult()}
        </div>
      )
  }
}

export default connect(mapStateToProps)(SmartFieldResult)
