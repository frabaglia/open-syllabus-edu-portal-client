import React, {Component} from 'react';
import DummyUniversityField from '../../Views/UniversityField/component.js'
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

class SmartUniversityField extends Component {

  componentDidMount = () => {}


  render() {
      return (
          <DummyUniversityField
            store={store}
            router={this.props.router}
          />
      )
  }
}

export default SmartUniversityField
// export default connect(mapStateToProps)(SmartUniversityField)
