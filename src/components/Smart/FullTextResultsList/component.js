import React, {Component} from 'react';
import DummyFullTextResultsList from '../../Views/FullTextResultsList/component.js'
import { TYPE_FULL_TEXT } from '../../../constants/eduportal/store-types'
import {connect} from 'react-redux'
import {fullTextResultsListRequest} from '../../../constants/eduportal/actions/FullTextResultsList'

function mapStateToProps(store) {
    return {resultsList: store.get('ResultsList')}
}


class SmartFullTextResultsList extends Component {

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

      dispatch(fullTextResultsListRequest({query:queryArray}));
    }
    else dispatch(fullTextResultsListRequest({}));
  }

  render() {
    return (Object.getOwnPropertyNames(this.props.resultsList.getIn([TYPE_FULL_TEXT, 'data']).toJS()).length === 0) ?
    (<div></div>) :
    (
      <DummyFullTextResultsList
        store={this.props.resultsList.getIn([TYPE_FULL_TEXT, 'data']).toJS()}
        router={this.props.router}
        _makeSearch={this.makeRequest}
      />
    )
  }
}

export default connect(mapStateToProps)(SmartFullTextResultsList)
