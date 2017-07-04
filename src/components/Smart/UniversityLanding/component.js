import React, {Component} from 'react';
import DummyUniverstiyLanding from '../../Views/UniversityLanding/component.js'
import {connect} from 'react-redux'

import {landingUniversityRequest} from '../../../constants/eduportal/actions/Landing'

function mapStateToProps(store) {
    return {landing: store.get('Landing')}
}

const store ={
}

class SmartUniverstiyLanding extends Component {

  componentDidMount = () => {
    let dispatch = this.props.dispatch;
    dispatch(landingUniversityRequest(1));
  }

  render() {
    // return (Object.getOwnPropertyNames(this.props.result.getIn([TYPE_AUTHOR, 'data']).toJS()).length === 0) ?
    // (<div></div>) :
    // (
    //   <DummyAuthorResult
    //     store={this.props.result.getIn([TYPE_AUTHOR, 'data']).toJS()}
    //     router={this.props.router}
    //   />
    // )
    console.log(this.props.landing.getIn(['universityLandingState']).toJS());
      return (
          <DummyUniverstiyLanding
            store={store}
            router={this.props.router}
          />
      )
  }
}

export default connect(mapStateToProps)(SmartUniverstiyLanding)
