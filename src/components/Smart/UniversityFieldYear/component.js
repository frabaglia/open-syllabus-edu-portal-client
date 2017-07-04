import React, {Component} from 'react';
import DummyUniversityFieldYear from '../../Views/UniversityFieldYear/component.js'
import {connect} from 'react-redux'

import {landingUniversityFieldYearRequest} from '../../../constants/eduportal/actions/Landing'

function mapStateToProps(store) {
    return {landing: store.get('Landing')}
}

class SmartUniversityFieldYear extends Component {

  componentDidMount = () => {
    let dispatch = this.props.dispatch;
    dispatch(landingUniversityFieldYearRequest(1));
  }


  render() {
    return (this.props.landing.getIn(['universityFieldYearLandingState','mostFrecuent']).toJS().length === 0) ?
    (<div></div>) :
    (
      <DummyUniversityFieldYear
        store={this.props.landing.getIn(['universityFieldYearLandingState']).toJS()}
        router={this.props.router}
      />
    )
  }
}

export default connect(mapStateToProps)(SmartUniversityFieldYear)
