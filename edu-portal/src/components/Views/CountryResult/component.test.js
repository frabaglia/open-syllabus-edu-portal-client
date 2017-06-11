import React from 'react'
import ReactDOM from 'react-dom'
import DummyCountryResult from './component'

const store = {
    "_id": 20,
    "name": "Amherst College",
    "school_description": "Amherst College is a private liberal arts college located in Amherst, Massachusetts, United States. Founded in 1821 as an attempt to relocate Williams College by its president, Zephaniah Swift Moore, Amherst is the third oldest institution of higher education in Massachusetts.[6] The institution was named after the town, which in turn had been named after Lord Jeffery Amherst. Amherst was established as a men's college and became coeducational in 1975.",
    "image": null,
    "syllabi": {
        "total": 1200,
        "by_field": [
          {
            "_id": 12,
            "name": "Math",
            "syllabus_count": 123
          },
      ]
    },
    "top_ranked": {
      "institutions": [
        {
          "name": "Yale University",
          "country": "USA",
          "rank": 1,
          "syllabus_count": 20000,
          "_id": 1
        },],
          "titles": [
            {
              "_id": 52,
              "rank": 1,
              "name": "Text name",
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
            },],
            "authors": [
              {
                "_id": 51,
                "author_first": "Neil",
                "author_middle": null,
                "author_last": "Cambell",
                "rank": 1,
                "appearences": {
                    "total": 4000
                },
                "text_count": 20,
                image:null
              },]
    },
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
        <DummyCountryResult
          store={store}
        />, div)
})
