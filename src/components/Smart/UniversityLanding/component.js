import React, {Component} from 'react';
import DummyUniverstiyLanding from '../../Views/UniversityLanding/component.js'
import {connect} from 'react-redux'

import {landingUniversityRequest} from '../../../constants/eduportal/actions/Landing'

function mapStateToProps(store) {
    return {landing: store.get('Landing')}
}

class SmartUniverstiyLanding extends Component {

  componentDidMount = () => {
    this.makeRequest('')
  }

  makeRequest = (year) => {
    let dispatch = this.props.dispatch;
    if(year !== '') dispatch(landingUniversityRequest({years:[year]}));
    else dispatch(landingUniversityRequest(1));
  }

  render() {
    return (this.props.landing.getIn(['universityLandingState','fieldChart']).toJS().length === 0) ?
    (<div></div>) :
    (
      <DummyUniverstiyLanding
        store={this.props.landing.getIn(['universityLandingState']).toJS()}
        router={this.props.router}
        _makeRequest={this.makeRequest}
      />
    )
  }
}

export default connect(mapStateToProps)(SmartUniverstiyLanding)
