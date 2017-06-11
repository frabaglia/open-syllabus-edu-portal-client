import React from 'react'
import ReactDOM from 'react-dom'
import DummyTitleResult from './component'

const store= {
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
    }
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
      }]
  },
  "top_fields_by_year": {
      "data": [
        {
          label: 'Economics',
          values: [
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
            {x: '2010', y: 0},
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
            {x: '2010', y: 0},
            {x: '2011', y: 0},
            {x: '2012', y: 2000},
            {x: '2013', y: 0},
            {x: '2014', y: 0},
            {x: '2015', y: 0},
            {x: '2016', y: 4000},
          ]
        }
      ]
  }
}

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <DummyTitleResult
          store={store}
        />, div)
})
