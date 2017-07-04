import React, {Component} from 'react';
import DummyUniversityField from '../../Views/UniversityField/component.js'
import {connect} from 'react-redux'

import {landingUniversityFieldRequest} from '../../../constants/eduportal/actions/Landing'

function mapStateToProps(store) {
    return {landing: store.get('Landing')}
}


class SmartUniversityField extends Component {

  componentDidMount = () => {
    this.makeRequest('')
  }

  makeRequest = (year) => {
    let dispatch = this.props.dispatch;
    if(year !== '') dispatch(landingUniversityFieldRequest({years:[year]}));
    else dispatch(landingUniversityFieldRequest(1));
  }

  render() {
    return (this.props.landing.getIn(['universityFieldLandingState','fieldChart']).toJS().length === 0) ?
    (<div></div>) :
    (
      <DummyUniversityField
        store={this.props.landing.getIn(['universityFieldLandingState']).toJS()}
        router={this.props.router}
        _makeRequest={this.makeRequest}
      />
    )
  }
}

export default connect(mapStateToProps)(SmartUniversityField)
