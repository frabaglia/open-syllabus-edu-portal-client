import React, {Component} from 'react';
import DummyTitleResultsList from '../../Views/TitleResultsList/component.js'
import { TYPE_TITLE } from '../../../constants/eduportal/store-types'
import {connect} from 'react-redux'
import {titleResultsListRequest} from '../../../constants/eduportal/actions/TitleResultsList'

function mapStateToProps(store) {
    return {resultsList: store.get('ResultsList')}
}

class SmartTitleResultsList extends Component {

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

      dispatch(titleResultsListRequest({query:queryArray}));
    }
    else dispatch(titleResultsListRequest({}));
  }

  render() {
    return (Object.getOwnPropertyNames(this.props.resultsList.getIn([TYPE_TITLE, 'data']).toJS()).length === 0) ?
    (<div></div>) :
    (
      <DummyTitleResultsList
        store={this.props.resultsList.getIn([TYPE_TITLE, 'data']).toJS()}
        router={this.props.router}
        _makeSearch={this.makeRequest}
      />
    )
  }
}

export default connect(mapStateToProps)(SmartTitleResultsList)
