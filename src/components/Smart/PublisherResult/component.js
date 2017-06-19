import React, {Component} from 'react';
// import './component.sass';
import {connect} from 'react-redux'
import $ from "jquery"
import {syllabusHTTPService} from '../../../os-toolkit/SyllabusHTTPService'
import {publisherResultRequest, publisherResultSuccess} from '../../../constants/actions/PublisherResult'
import {resultsListError} from '../../../constants/actions/GlobalMessages'
import DummyPublisherResult from '../../Views/PublisherResult/component.js'
import {TYPE_PUBLISHER} from '../../../store/storeTypes'

function mapStateToProps(store) {
  return {result: store.get('Result')}

}

class SmartPublisherResult extends Component {



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

      dispatch(publisherResultRequest())

      let syllabusHTTPServicePromise = syllabusHTTPService.getPublisherResultNormalized(this.props.location.query.id)

      syllabusHTTPServicePromise.then( (response) => {
          dispatch(publisherResultSuccess(response.data))
      }).catch(function(error) {
          dispatch(resultsListError(error))
      })
    }
    else {
      let dispatch = this.props.dispatch;

      dispatch(publisherResultRequest())

      let syllabusHTTPServicePromise = syllabusHTTPService.getPublisherResult(this.props.location.query.id)

      syllabusHTTPServicePromise.then( (response) => {
          dispatch(publisherResultSuccess(response.data))
      }).catch(function(error) {
          dispatch(resultsListError(error))
      })
    }
  }

  getDataNormalizedOrRAW = (dataType) =>{
    this.makeRequest(dataType);
  }


  renderDummyPublisherResult = () =>{
    return ($.isEmptyObject(this.props.result.getIn([TYPE_PUBLISHER, 'data']).toJS())) ? (<div></div>) : (<DummyPublisherResult store={this.props.result.getIn([TYPE_PUBLISHER, 'data']).toJS()} getDataNormalizedOrRAW={this.getDataNormalizedOrRAW}/>);
  }

  render() {
      return (
        <div>
          {this.renderDummyPublisherResult()}
        </div>
      )
  }
}

export default connect(mapStateToProps)(SmartPublisherResult)
