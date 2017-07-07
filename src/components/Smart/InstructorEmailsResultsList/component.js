import React, {Component} from 'react';
import DummyInstructorEmailsResultsList from '../../Views/InstructorEmailsResultsList/component.js'
import { TYPE_INSTRUCTOR } from '../../../constants/eduportal/store-types'
import {connect} from 'react-redux'
import {instructorResultsListRequest} from '../../../constants/eduportal/actions/InstructorResultsList'

function mapStateToProps(store) {
    return {resultsList: store.get('ResultsList')}
}



class SmartInstructorEmailsResultsList extends Component {

  constructor(){
    super();
    this.state = {
      currentParamsQuery:[],
    }
  }

  componentDidMount = () => {
    this.makeRequest([])
  }

  makeRequest = (queryList) =>{
    let dispatch = this.props.dispatch;
    if(queryList.length !== 0){
      console.log(queryList);
      let queryArray = [];
      queryList.map( (query, i) =>{
        queryArray.push(query.name)
      })

      dispatch(instructorResultsListRequest({query:queryArray}));
    }
    else dispatch(instructorResultsListRequest({}));
  }

  render() {
    return (Object.getOwnPropertyNames(this.props.resultsList.getIn([TYPE_INSTRUCTOR, 'data']).toJS()).length === 0) ?
    (<div></div>) :
    (
      <DummyInstructorEmailsResultsList
        store={this.props.resultsList.getIn([TYPE_INSTRUCTOR, 'data']).toJS()}
        router={this.props.router}
        _makeSearch={this.makeRequest}
      />
    )
  }
}

export default connect(mapStateToProps)(SmartInstructorEmailsResultsList)
