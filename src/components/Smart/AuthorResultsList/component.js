import React, {Component} from 'react';
import DummyAuthorResultsList from '../../Views/AuthorResultsList/component.js'
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
// } from '../../../constants/eduportal/actions/Landing'
// import {resultsListError} from '../../../constants/eduportal/actions/GlobalMessages'

// function mapStateToProps(store) {
//     return {landing: store.get('Landing')}
// }

const store ={
}

class SmartAuthorResultsList extends Component {

  componentDidMount = () => {}


  render() {
      return (
          <DummyAuthorResultsList
            store={store}
            router={this.props.router}
          />
      )
  }
}

export default SmartAuthorResultsList
// export default connect(mapStateToProps)(SmartAuthorResultsList)
