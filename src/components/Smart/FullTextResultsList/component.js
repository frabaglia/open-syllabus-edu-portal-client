import React, {Component} from 'react';
import DummyFullTextResultsList from '../../Views/FullTextResultsList/component.js'
import { TYPE_FULL_TEXT } from '../../../constants/eduportal/store-types'
import {connect} from 'react-redux'
import {fullTextResultsListRequest} from '../../../constants/eduportal/actions/FullTextResultsList'

function mapStateToProps(store) {
    return {resultsList: store.get('ResultsList')}
}


class SmartFullTextResultsList extends Component {

  componentDidMount = () => {
    let dispatch = this.props.dispatch;
    dispatch(fullTextResultsListRequest({query:'someFullText'}));
  }


  render() {
    return (Object.getOwnPropertyNames(this.props.resultsList.getIn([TYPE_FULL_TEXT, 'data']).toJS()).length === 0) ?
    (<div></div>) :
    (
      <DummyFullTextResultsList
        store={this.props.resultsList.getIn([TYPE_FULL_TEXT, 'data']).toJS()}
        router={this.props.router}
      />
    )
  }
}

export default connect(mapStateToProps)(SmartFullTextResultsList)
