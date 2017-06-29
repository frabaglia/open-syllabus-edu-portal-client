import React, {Component} from 'react';
import DummyTitleResult from '../../Views/TitleResult/component.js'
import { TYPE_TITLE } from '../../../constants/eduportal/store-types'
import {connect} from 'react-redux'
import {titleResultRequest} from '../../../constants/eduportal/actions/TitleResult'

function mapStateToProps(store) {
    return {result: store.get('Result')}
}

class SmartTitleResult extends Component {

  componentDidMount = () => {
    let dispatch = this.props.dispatch;
    dispatch(titleResultRequest(1));
  }


  render() {
    return (Object.getOwnPropertyNames(this.props.result.getIn([TYPE_TITLE, 'data']).toJS()).length === 0) ?
    (<div></div>) :
    (
      <DummyTitleResult
        store={this.props.result.getIn([TYPE_TITLE, 'data']).toJS()}
        router={this.props.router}
      />
    )
  }
}

export default connect(mapStateToProps)(SmartTitleResult)
