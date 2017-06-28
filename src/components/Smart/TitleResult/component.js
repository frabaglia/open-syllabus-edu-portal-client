import React, {Component} from 'react';
import DummyTitleResult from '../../Views/TitleResult/component.js'
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
  "_id": 55,
  "rank": 1,
  "score": 6.5,
  "title": "A Manual for Writers of Term Papers, Theses, and Dissertations",
  "title_description": "Whether you’re a policymaker, investor, or involved in a nonprofit, Social Entrepreneurship for the 21st Century gives you the knowledge you need to make the best possible decisions for the future. A former McKinsey consultant reveals how social entrepreneurship has filtered into the workings of government and private enterprise, where social sector values are now shaping “social impact” capitalism.", //DOESNT EXISTS ACTUALLY
  "author": {
      "_id": 51,
      "author_first": "Neil",
      "author_middle": null,
      "author_last": "Cambell",
  },
  "publisher": {
      "_id": 55,
      "name": "MacMillan"
  },
  "pub_year": 2013,
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
        {
          "_id": 13,
          "name": 'Urban Planing',
          "syllabus_count": 4
        }
      ]
  },
  "textAssignedWith": [
    {
      "_id": 55,
      "title": "Thesis #1",
      "rank": 10,
      "author": {
          "_id": 55,
          "author_first": "Neil",
          "author_middle": null,
          "author_last": "Cambell",
      },
      "pub_year": 1943
    },
    {
      "_id": 55,
      "title": "Thesis #2",
      "rank": 10,
      "author": {
          "_id": 55,
          "author_first": "Neil",
          "author_middle": null,
          "author_last": "Cambell",
      },
      "pub_year": 1943
    },
    {
      "_id": 55,
      "title": "Thesis #3",
      "rank": 10,
      "author": {
          "_id": 55,
          "author_first": "Neil",
          "author_middle": null,
          "author_last": "Cambell",
      },
      "pub_year": 1943
    },
    {
      "_id": 55,
      "title": "Thesis #4",
      "rank": 10,
      "author": {
          "_id": 55,
          "author_first": "Neil",
          "author_middle": null,
          "author_last": "Cambell",
      },
      "pub_year": 1943
    },
    {
      "_id": 55,
      "title": "Thesis #5",
      "rank": 10,
      "author": {
          "_id": 55,
          "author_first": "Neil",
          "author_middle": null,
          "author_last": "Cambell",
      },
      "pub_year": 1943
    },
    {
      "_id": 55,
      "title": "Thesis #6",
      "rank": 10,
      "author": {
          "_id": 55,
          "author_first": "Neil",
          "author_middle": null,
          "author_last": "Cambell",
      },
      "pub_year": 1943
    },
    {
      "_id": 55,
      "title": "Thesis #7",
      "rank": 10,
      "author": {
          "_id": 55,
          "author_first": "Neil",
          "author_middle": null,
          "author_last": "Cambell",
      },
      "pub_year": 1943
    },
  ],
  "availability": {
      "openVersion": { // OR EXTERNAL LINKS, NO DB INDEXED?
          "_id": 55,
          "title": "Thesis #1",
          "url": "https://facebook.com"
      },
      "viaYourInstitution": { // OR EXTERNAL LINKS, NO DB INDEXED?
          "_id": 55,
          "title": "Thesis #1",
          "url": "https://facebook.com"
      }
  },
  "seeTheTextOn": [
    { // OR EXTERNAL LINKS, NO DB INDEXED?
      "_id": 55,
      "name": "Sociology 1",
      "url": "https://facebook.com"
    },
    { // OR EXTERNAL LINKS, NO DB INDEXED?
      "_id": 55,
      "name": "Sociology 1",
      "url": "https://facebook.com"
    },
    { // OR EXTERNAL LINKS, NO DB INDEXED?
      "_id": 55,
      "name": "Sociology 1",
      "url": "https://facebook.com"
    },
    { // OR EXTERNAL LINKS, NO DB INDEXED?
      "_id": 55,
      "name": "Sociology 1",
      "url": "https://facebook.com"
    },
    { // OR EXTERNAL LINKS, NO DB INDEXED?
      "_id": 55,
      "name": "Sociology 1",
      "url": "https://facebook.com"
    },
    { // OR EXTERNAL LINKS, NO DB INDEXED?
      "_id": 55,
      "name": "Sociology 1",
      "url": "https://facebook.com"
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
  "top_fields_by_year": {
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

class SmartTitleResult extends Component {

  componentDidMount = () => {}


  render() {
      return (
          <DummyTitleResult
            store={store}
            router={this.props.router}
          />
      )
  }
}

export default SmartTitleResult
// export default connect(mapStateToProps)(SmartTitleResult)
