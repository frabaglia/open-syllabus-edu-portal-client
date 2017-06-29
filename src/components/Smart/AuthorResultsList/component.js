import React, {Component} from 'react';
import DummyAuthorResultsList from '../../Views/AuthorResultsList/component.js'
import { TYPE_AUTHOR } from '../../../constants/eduportal/store-types'
import {connect} from 'react-redux'
import {authorResultsListRequest} from '../../../constants/eduportal/actions/AuthorResultsList'

function mapStateToProps(store) {
    return {resultsList: store.get('ResultsList')}
}

class SmartAuthorResultsList extends Component {

  componentDidMount = () => {
    let dispatch = this.props.dispatch;
    dispatch(authorResultsListRequest({pages:[1,2],query:'someAuthor'}));
  }


  render() {
    return (Object.getOwnPropertyNames(this.props.resultsList.getIn([TYPE_AUTHOR, 'data']).toJS()).length === 0) ?
    (<div></div>) :
    (
      <DummyAuthorResultsList
        store={this.props.resultsList.getIn([TYPE_AUTHOR, 'data']).toJS()}
        router={this.props.router}
      />
    )
  }
}

export default connect(mapStateToProps)(SmartAuthorResultsList)
