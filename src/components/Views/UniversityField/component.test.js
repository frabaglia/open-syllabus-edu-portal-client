import React from 'react'
import ReactDOM from 'react-dom'
import UniversityField from './component'

const store = {
  syllabyAvailableByYear:[
    {
      year: 2010,
      syllabus_count: 20,
      _id: 10,
      id_year: 2010
    },
  ],
  topRanked: {
    "columbia": [
    {
      "_id": 52,
      "rank": 1,
      "name": "Columbia",
      "author": {
          "_id": 51,
          "author_first": "Neil",
          "author_middle": null,
          "author_last": "Cambell",
      },
      "appearences": {
          "total": 100
      },
      "score": 9.9,
      "pub_year": 1943
    },
  ],
  "allSchools": [
    {
      "_id": 52,
      "rank": 1,
      "name": "All Schools",
      "author": {
          "_id": 51,
          "author_first": "Neil",
          "author_middle": null,
          "author_last": "Cambell",
      },
      "appearences": {
          "total": 100
      },
      "score": 9.9,
      "pub_year": 1943
    },
  ]
},
  closestPeerTeachingProfiles: [
    {
      title: 'New York University',
      url: 'www.google.com'
    },
  ],
  fieldChart:[{
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
  }]
}

const router ={
  location:{
    pathname: 'somePathname'
  }
}

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <UniversityField store={store} router={router}/>, div)
})
