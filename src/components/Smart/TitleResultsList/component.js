import React, {Component} from 'react';
import DummyTitleResultsList from '../../Views/TitleResultsList/component.js'
import { TYPE_TITLE } from '../../../constants/eduportal/store-types'
import {connect} from 'react-redux'
import {titleResultsListRequest} from '../../../constants/eduportal/actions/TitleResultsList'

function mapStateToProps(store) {
    return {resultsList: store.get('ResultsList')}
}

class SmartTitleResultsList extends Component {

  componentDidMount = () => {
    let dispatch = this.props.dispatch;
    dispatch(titleResultsListRequest({pages:[1,2],query:'someTitle'}));
  }



  render() {
    return (Object.getOwnPropertyNames(this.props.resultsList.getIn([TYPE_TITLE, 'data']).toJS()).length === 0) ?
    (<div></div>) :
    (
      <DummyTitleResultsList
        store={this.props.resultsList.getIn([TYPE_TITLE, 'data']).toJS()}
        router={this.props.router}
      />
    )
  }
}

export default connect(mapStateToProps)(SmartTitleResultsList)
