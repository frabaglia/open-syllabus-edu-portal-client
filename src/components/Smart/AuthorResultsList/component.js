import React, {Component} from 'react';
import DummyAuthorResultsList from '../../Views/AuthorResultsList/component.js'
import { TYPE_AUTHOR } from '../../../constants/eduportal/store-types'
import {connect} from 'react-redux'
import {authorResultsListRequest} from '../../../constants/eduportal/actions/AuthorResultsList'

function mapStateToProps(store) {
    return {resultsList: store.get('ResultsList')}
}

class SmartAuthorResultsList extends Component {

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

      dispatch(authorResultsListRequest({query:queryArray}));
    }
    else dispatch(authorResultsListRequest({}));
  }

  render() {
    return (Object.getOwnPropertyNames(this.props.resultsList.getIn([TYPE_AUTHOR, 'data']).toJS()).length === 0) ?
    (<div></div>) :
    (
      <DummyAuthorResultsList
        store={this.props.resultsList.getIn([TYPE_AUTHOR, 'data']).toJS()}
        router={this.props.router}
        _makeSearch={this.makeRequest}
      />
    )
  }
}

export default connect(mapStateToProps)(SmartAuthorResultsList)
