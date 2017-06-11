import React, {Component} from 'react';
// import './component.sass';
import {connect} from 'react-redux'
import {syllabusLinker} from '../../../utils/SyllabusLinker/component'
import {syllabusHTTPService} from '../../../utils/SyllabusHTTPService/component'

import {countryResultRequest, countryResultSuccess} from '../../../actions/CountryResult/actions'
import $ from "jquery"


import {globalError} from '../../../actions/GlobalMessages/actions'
import DummyCountryResult from '../../Views/CountryResult/component.js'
import {TYPE_COUNTRY} from '../../../store/storeTypes'

function mapStateToProps(store) {
  return {result: store.get('Result')}

}

class SmartCountryResult extends Component {



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

      dispatch(countryResultRequest())

      let syllabusHTTPServicePromise = syllabusHTTPService.getCountryResultNormalized(this.props.location.query.id)

      syllabusHTTPServicePromise.then( (response) => {
          dispatch(countryResultSuccess(response.data))
      }).catch(function(error) {
          dispatch(globalError(error))
      })
    }
    else {
      let dispatch = this.props.dispatch;

      dispatch(countryResultRequest())

      let syllabusHTTPServicePromise = syllabusHTTPService.getCountryResult(this.props.location.query.id)

      syllabusHTTPServicePromise.then( (response) => {
          dispatch(countryResultSuccess(response.data))
      }).catch(function(error) {
          dispatch(globalError(error))
      })
    }
  }

  getDataNormalizedOrRAW = (dataType) =>{
    this.makeRequest(dataType);
  }


  renderDummyCountryResult = () =>{
    return ($.isEmptyObject(this.props.result.getIn([TYPE_COUNTRY, 'data']).toJS())) ?
    (<div></div>) :
    (<DummyCountryResult
      store={this.props.result.getIn([TYPE_COUNTRY, 'data']).toJS()}
      getDataNormalizedOrRAW={this.getDataNormalizedOrRAW}
      router={this.props.router}
    />);
  }

  render() {
      return (
        <div>
          {this.renderDummyCountryResult()}
        </div>
      )
  }
}

export default connect(mapStateToProps)(SmartCountryResult)
