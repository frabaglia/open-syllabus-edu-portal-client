import React, {Component} from 'react';
import DummyAuthorResult from '../../Views/AuthorResult/component.js'
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

const store = {
  "_id": 42,
  "author_first": "Fredric",
  "author_middle": null,
  "author_last": "Jameson",
  "author_description": "Fredric Jameson (born 14 April 1934) is an American literary critic and Marxist political theorist. He is best known for his analysis of contemporary cultural trends. He once described postmodernism as the spatialization of culture under the pressure of organized capitalism. Jameson's best-known books include Postmodernism, or, The Cultural Logic of Late Capitalism, The Political Unconscious, and Marxism and Form.", //DOESNT EXISTS ACTUALLY
  "image": null, //STATIC ASSETS SHOULD BE INDEXED AS THE RELATIVE PATH FROM ROOT,
  "appearences": {
      "total": 200,
      "by_field": [
        {
          "_id": 41,
          "name": "Math",
          "syllabus_count": 10
        },
        {
          "_id": 41,
          "name": 'Public Administration',
          "syllabus_count": 9
        },
        {
          "_id": 100,
          "name": 'Business',
          "syllabus_count": 5
        },
        {
          "_id": 54,
          "name": 'Undefined',
          "syllabus_count": 1
        },
      ]
  },
  "author_titles": [
    {
      "_id": 41,
      "title": "The Antinomies Of Realism",
      "publisher": {
          "_id": 432,
          "name": "The penguin books"
      },
      "appearences": {
          "by_unique_field": {
              "_id": 12,
              "name": "Math",
              "syllabus_count": 123
          }
      },
      "pub_year": 1998,
      "unattributed": 8,
      "score": 12.0
    },
    {
      "_id": 41,
      "title": "Archaeologies of the Future: The Desire Called Utopia and Other Science Fictions",
      "publisher": {
          "_id": 432,
          "name": "The penguin books"
      },
      "appearences": {
          "by_unique_field": {
              "_id": 12,
              "name": "Math",
              "syllabus_count": 123
          }
      },
      "pub_year": 1998,
      "unattributed": 8,
      "score": 12.0
    },
    {
      "_id": 41,
      "title": "The Geopolitical Aesthetic: Cinema and Space in the World System (Perspectives)",
      "publisher": {
          "_id": 432,
          "name": "The penguin books"
      },
      "appearences": {
          "by_unique_field": {
              "_id": 12,
              "name": "Math",
              "syllabus_count": 123
          }
      },
      "pub_year": 1998,
      "unattributed": 8,
      "score": 12.0
    },
    {
      "_id": 41,
      "title": "The Geopolitical Aesthetic: Cinema and Space in the World System (Perspectives)",
      "publisher": {
          "_id": 432,
          "name": "The penguin books"
      },
      "appearences": {
          "by_unique_field": {
              "_id": 12,
              "name": "Math",
              "syllabus_count": 123
          }
      },
      "pub_year": 1998,
      "unattributed": 8,
      "score": 12.0
    },
],
"country_map": {
  initialPosition:{
    lat: 39.73,
    lng: -104.99,
    zoom: 10
  },
  "data": [
    {
      "_id": 55,
      "lat": 39.61,
      "lon": -105.02,
      "name": "FICH - Universidad Nacional del Litoral",
      "formatedAdress": "Santa fe, Santa fe",
      "syllabus_count": 20000
    },
    {
      "_id": 55,
      "lat": 39.74,
      "lon": -104.99,
      "name": "FICH - Universidad Nacional del Litoral",
      "formatedAdress": "Santa fe, Santa fe",
      "syllabus_count": 20000
    },
    {
      "_id": 55,
      "lat": 39.73,
      "lon": -104.8,
      "name": "FICH - Universidad Nacional del Litoral",
      "formatedAdress": "Santa fe, Santa fe",
      "syllabus_count": 20000
    },
    {
      "_id": 55,
      "lat": 39.77,
      "lon": -105.23,
      "name": "FICH - Universidad Nacional del Litoral",
      "formatedAdress": "Santa fe, Santa fe",
      "syllabus_count": 20000
    },
  ]
},
  "top_titles_by_year": {
      "data": [
        {
          label: 'Economics',
          values: [
            {x: '1997', y: 2000},
            {x: '1998', y: 2000},
            {x: '1999', y: 2000},
            {x: '2000', y: 2000},
            {x: '2001', y: 2000},
            {x: '2002', y: 2000},
            {x: '2003', y: 2000},
            {x: '2004', y: 2000},
            {x: '2005', y: 2000},
            {x: '2006', y: 2000},
            {x: '2007', y: 2000},
            {x: '2008', y: 2000},
            {x: '2009', y: 2000},
            {x: '2010', y: 2000},
            {x: '2011', y: 6000},
            {x: '2012', y: 2500},
            {x: '2013', y: 5500},
            {x: '2014', y: 6000},
            {x: '2015', y: 4000},
            {x: '2016', y: 4000},
          ]
        },
        {
          label: 'Literature',
          values: [
            {x: '1997', y: 3000},
            {x: '1998', y: 5000},
            {x: '1999', y: 0},
            {x: '2000', y: 4000},
            {x: '2001', y: 0},
            {x: '2002', y: 1500},
            {x: '2003', y: 3000},
            {x: '2004', y: 0},
            {x: '2005', y: 6000},
            {x: '2006', y: 0},
            {x: '2007', y: 0},
            {x: '2008', y: 7000},
            {x: '2009', y: 0},
            {x: '2010', y: 10000},
            {x: '2011', y: 0},
            {x: '2012', y: 20000},
            {x: '2013', y: 0},
            {x: '2014', y: 2000},
            {x: '2015', y: 3000},
            {x: '2016', y: 3000},
          ]
        },
        {
          label: 'History',
          values: [
            {x: '1997', y: 3800},
            {x: '1998', y: 3800},
            {x: '1999', y: 3800},
            {x: '2000', y: 3800},
            {x: '2001', y: 3800},
            {x: '2002', y: 3800},
            {x: '2003', y: 3800},
            {x: '2004', y: 3800},
            {x: '2005', y: 3800},
            {x: '2006', y: 3800},
            {x: '2007', y: 3800},
            {x: '2008', y: 3800},
            {x: '2009', y: 3800},
            {x: '2010', y: 3800},
            {x: '2011', y: 3800},
            {x: '2012', y: 7000},
            {x: '2013', y: 3800},
            {x: '2014', y: 2000},
            {x: '2015', y: 2000},
            {x: '2016', y: 2000},
          ]
        },
        {
          label: 'English',
          values: [
            {x: '1997', y: 3000},
            {x: '1998', y: 5000},
            {x: '1999', y: 0},
            {x: '2000', y: 4000},
            {x: '2001', y: 0},
            {x: '2002', y: 1500},
            {x: '2003', y: 3000},
            {x: '2004', y: 0},
            {x: '2005', y: 6000},
            {x: '2006', y: 0},
            {x: '2007', y: 0},
            {x: '2008', y: 7000},
            {x: '2009', y: 0},
            {x: '2010', y: 0},
            {x: '2011', y: 0},
            {x: '2012', y: 2000},
            {x: '2013', y: 0},
            {x: '2014', y: 0},
            {x: '2015', y: 2000},
            {x: '2016', y: 3800},
          ]
        },
        {
          label: 'Biology',
          values: [
            {x: '1997', y: 3000},
            {x: '1998', y: 5000},
            {x: '1999', y: 0},
            {x: '2000', y: 4000},
            {x: '2001', y: 0},
            {x: '2002', y: 1500},
            {x: '2003', y: 3000},
            {x: '2004', y: 0},
            {x: '2005', y: 6000},
            {x: '2006', y: 0},
            {x: '2007', y: 0},
            {x: '2008', y: 7000},
            {x: '2009', y: 0},
            {x: '2010', y: 0},
            {x: '2011', y: 0},
            {x: '2012', y: 2000},
            {x: '2013', y: 0},
            {x: '2014', y: 0},
            {x: '2015', y: 0},
            {x: '2016', y: 4000},
          ]
        },
      ]
  }
}

class SmartAuthorResult extends Component {

  componentDidMount = () => {}


  render() {
      return (
          <DummyAuthorResult
            store={store}
            router={this.props.router}
          />
      )
  }
}

export default SmartAuthorResult
// export default connect(mapStateToProps)(SmartAuthorResult)
