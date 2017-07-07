import React from 'react'
import ReactDOM from 'react-dom'
import UniversityLanding from './component'

const router ={
  location:{
    pathname: 'somePathname'
  }
}

const store = {
  syllabus_count: 1500,
  mostFrecuent: [
    {
      "_id": 12,
      "title": "Introduction to Economics",
      "author": {
          "_id": 32,
          "author_first": "Neil",
          "author_middle": null,
          "author_last": "Cambell",
      },
      "publisher": {
          "_id": 14,
          "name": "Pengiun Books"
      },
      "pub_year": 2000,
      "appearences": {
          "by_unique_field": {
              "_id": 152,
              "name": "Math",
              "syllabus_count": 9
          }
      }
    }
  ],
  fieldChart: [{
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
  }],
  universityField:[
    {
      name: 'History',
      syllabus_count: 360,
      _id: 1
    },
  ]
}

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <UniversityLanding store={store} router={router}/>, div)
})
