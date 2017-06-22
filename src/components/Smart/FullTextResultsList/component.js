import React, {Component} from 'react';
import DummyFullTextResultsList from '../../Views/FullTextResultsList/component.js'
// import {connect} from 'react-redux'
// import {
//     TYPE_TITLE,
//     TYPE_AUTHOR,
//     TYPE_INSTITUTION,
//     TYPE_FIELD,
//     TYPE_COUNTRY,
//     TYPE_PUBLISHER,
//     // TYPE_INSTITUTION_FIELD
// } from '../../../constants/action-types/store'
//
// import {syllabusHTTPService} from '../../../os-toolkit/SyllabusHTTPService'
// import {
//   mostFrecuentTypeUpdate,
//   mostFrecuentTitleRequest,
//   mostFrecuentTitleSuccess,
//   mostFrecuentAuthorRequest,
//   mostFrecuentAuthorSuccess,
//   mostFrecuentFieldRequest,
//   mostFrecuentFieldSuccess,
//   mostFrecuentInstitutionRequest,
//   mostFrecuentInstitutionSuccess,
//   mostFrecuentCountryRequest,
//   mostFrecuentCountrySuccess,
//   mostFrecuentPublisherRequest,
//   mostFrecuentPublisherSuccess,
// } from '../../../constants/actions/Landing'
// import {resultsListError} from '../../../constants/actions/GlobalMessages'

// function mapStateToProps(store) {
//     return {landing: store.get('Landing')}
// }

const store ={
}

class SmartFullTextResultsList extends Component {

  componentDidMount = () => {}


  render() {
      return (
          <DummyFullTextResultsList
            store={store}
            router={this.props.router}
          />
      )
  }
}

export default SmartFullTextResultsList
// export default connect(mapStateToProps)(SmartFullTextResultsList)
