import React, {Component} from 'react';
import DummyLanding from '../../Views/Landing/component.js'
// import {connect} from 'react-redux'
// import {
//     TYPE_TITLE,
//     TYPE_AUTHOR,
//     TYPE_INSTITUTION,
//     TYPE_FIELD,
//     TYPE_COUNTRY,
//     TYPE_PUBLISHER,
//     // TYPE_INSTITUTION_FIELD
// } from '../../../constants/explorer/action-types/store'
//
// import {syllabusHTTPService} from '../../../os-toolkit/SyllabusExplorerHTTPService'
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
// import {resultsListError} from '../../../constants/eduportal/actions/Global'

// function mapStateToProps(store) {
//     return {landing: store.get('Landing')}
// }

const store ={
}

class SmartLanding extends Component {

  componentDidMount = () => {}


  render() {
      return (
          <DummyLanding
            store={store}
            router={this.props.router}
          />
      )
  }
}

export default SmartLanding
// export default connect(mapStateToProps)(SmartLanding)
