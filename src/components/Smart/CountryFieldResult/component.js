import React, {Component} from 'react';
// import './component.sass';
import {connect} from 'react-redux'
import {syllabusLinker} from '../../../utils/SyllabusLinker/component'
import {syllabusHTTPService} from '../../../utils/SyllabusHTTPService/component'

import {countryFieldResultRequest, countryFieldResultSuccess} from '../../../actions/CountryFieldResult/actions'
import $ from "jquery"


import {globalError} from '../../../actions/GlobalMessages/actions'
import DummyCountryFieldResult from '../../Views/CountryFieldResult/component.js'
import {  TYPE_COUNTRY_FIELD } from '../../../store/storeTypes'

function mapStateToProps(store) {
    return {result: store.get('Result')}

}

class SmartCountryFieldResult extends Component {



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

      dispatch(countryFieldResultRequest())
      let syllabusHTTPServicePromise = syllabusHTTPService.getCountryFieldResultNormalized(this.props.location.query.id)

      syllabusHTTPServicePromise.then( (response) => {
          dispatch(countryFieldResultSuccess(response.data))
      }).catch(function(error) {
          dispatch(globalError(error))
      })
    }
    else {
      let dispatch = this.props.dispatch;

      dispatch(countryFieldResultRequest())

      let syllabusHTTPServicePromise = syllabusHTTPService.getCountryFieldResult(this.props.location.query.id)

      syllabusHTTPServicePromise.then( (response) => {
          dispatch(countryFieldResultSuccess(response.data))
      }).catch(function(error) {
          dispatch(globalError(error))
      })
    }
  }

  getDataNormalizedOrRAW = (dataType) =>{
    this.makeRequest(dataType);
  }

  renderDummyCountryFieldResult = () =>{
    return ($.isEmptyObject(this.props.result.getIn([TYPE_COUNTRY_FIELD, 'data']))) ? (<div></div>) : (<DummyCountryFieldResult store={this.props.result.getIn([TYPE_COUNTRY_FIELD, 'data']).toJS()} getDataNormalizedOrRAW={this.getDataNormalizedOrRAW}/>);
  }

  render() {
      return (
        <div>
          {this.renderDummyCountryFieldResult()}
        </div>
      )
  }
}

export default connect(mapStateToProps)(SmartCountryFieldResult)
