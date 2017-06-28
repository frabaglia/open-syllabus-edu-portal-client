import React from 'react'
import ReactDOM from 'react-dom'
import DummyAuthorResult from './component'

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
        }
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
    }
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
  "top_titles_by_year": {
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

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <DummyAuthorResult
          store={store}
        />, div)
})
