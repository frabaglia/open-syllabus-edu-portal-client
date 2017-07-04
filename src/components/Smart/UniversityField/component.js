import React, {Component} from 'react';
import DummyUniversityField from '../../Views/UniversityField/component.js'
import {connect} from 'react-redux'

import {landingUniversityFieldRequest} from '../../../constants/eduportal/actions/Landing'

function mapStateToProps(store) {
    return {landing: store.get('Landing')}
}

const store ={
}

class SmartUniversityField extends Component {

  componentDidMount = () => {
    let dispatch = this.props.dispatch;
    dispatch(landingUniversityFieldRequest(1));
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
    console.log(this.props.landing.getIn(['universityFieldLandingState']).toJS());
      return (
          <DummyUniversityField
            store={store}
            router={this.props.router}
          />
      )
  }
}

export default connect(mapStateToProps)(SmartUniversityField)
