import React, {Component} from 'react';
import DummyInstructorEmailsResultsList from '../../Views/InstructorEmailsResultsList/component.js'
import { TYPE_INSTRUCTOR } from '../../../constants/eduportal/store-types'
import {connect} from 'react-redux'
import {instructorResultsListRequest} from '../../../constants/eduportal/actions/InstructorResultsList'

function mapStateToProps(store) {
    return {resultsList: store.get('ResultsList')}
}



class SmartInstructorEmailsResultsList extends Component {

  componentDidMount = () => {
    let dispatch = this.props.dispatch;
    dispatch(instructorResultsListRequest({query:'someInstructor'}));
  }

  render() {
    return (Object.getOwnPropertyNames(this.props.resultsList.getIn([TYPE_INSTRUCTOR, 'data']).toJS()).length === 0) ?
    (<div></div>) :
    (
      <DummyInstructorEmailsResultsList
        store={this.props.resultsList.getIn([TYPE_INSTRUCTOR, 'data']).toJS()}
        router={this.props.router}
      />
    )
  }
}

export default connect(mapStateToProps)(SmartInstructorEmailsResultsList)
