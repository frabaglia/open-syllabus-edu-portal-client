import React, {Component} from 'react';
import DummyAuthorResult from '../../Views/AuthorResult/component.js'
import {connect} from 'react-redux'
import { TYPE_AUTHOR } from '../../../constants/eduportal/store-types'

import {authorResultRequest} from '../../../constants/eduportal/actions/AuthorResult'

function mapStateToProps(store) {
    return {result: store.get('Result')}
}

class SmartAuthorResult extends Component {

  componentDidMount = () => {
    let dispatch = this.props.dispatch;
    dispatch(authorResultRequest(1));
  }


  render() {
      return (Object.getOwnPropertyNames(this.props.result.getIn([TYPE_AUTHOR, 'data']).toJS()).length === 0) ?
      (<div></div>) :
      (
        <DummyAuthorResult
          store={this.props.result.getIn([TYPE_AUTHOR, 'data']).toJS()}
          router={this.props.router}
        />
      )
  }
}

export default connect(mapStateToProps)(SmartAuthorResult)
