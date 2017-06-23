import React from 'react'
import ReactDOM from 'react-dom'
import PublisherResult from './component'

const store = {
  "name": "Oxford University Press",
  "top_ranked": {
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
      },
      {
          "_id": 52,
          "rank": 2,
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
      },
      {
          "_id": 52,
          "rank": 3,
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
      },
      {
          "_id": 52,
          "rank": 4,
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
      },
      {
          "_id": 52,
          "rank": 5,
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
      },
      {
          "_id": 52,
          "rank": 6,
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
      },
      {
          "_id": 52,
          "rank": 7,
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
      },
      {
          "_id": 52,
          "rank": 8,
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
      },
      {
          "_id": 52,
          "rank": 9,
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
      },
      {
          "_id": 52,
          "rank": 10,
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
      },
      {
          "_id": 52,
          "rank": 11,
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
      },
    ],
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
        },
        {
          "_id": 51,
          "author_first": "Neil",
          "author_middle": null,
          "author_last": "Cambell",
          "rank": 2,
          "appearences": {
              "total": 4000
          },
          "text_count": 20,
          image:null
        },
        {
          "_id": 51,
          "author_first": "Neil",
          "author_middle": null,
          "author_last": "Cambell",
          "rank": 3,
          "appearences": {
              "total": 4000
          },
          "text_count": 20,
          image:null
        },
        {
          "_id": 51,
          "author_first": "Neil",
          "author_middle": null,
          "author_last": "Cambell",
          "rank": 4,
          "appearences": {
              "total": 4000
          },
          "text_count": 20,
          image:null
        },
        {
          "_id": 51,
          "author_first": "Neil",
          "author_middle": null,
          "author_last": "Cambell",
          "rank": 5,
          "appearences": {
              "total": 4000
          },
          "text_count": 20,
          image:null
        },
        {
          "_id": 51,
          "author_first": "Neil",
          "author_middle": null,
          "author_last": "Cambell",
          "rank": 6,
          "appearences": {
              "total": 4000
          },
          "text_count": 20,
          image:null
        },
        {
          "_id": 51,
          "author_first": "Neil",
          "author_middle": null,
          "author_last": "Cambell",
          "rank": 7,
          "appearences": {
              "total": 4000
          },
          "text_count": 20,
          image:null
        },
        {
          "_id": 51,
          "author_first": "Neil",
          "author_middle": null,
          "author_last": "Cambell",
          "rank": 8,
          "appearences": {
              "total": 4000
          },
          "text_count": 20,
          image:null
        },
        {
          "_id": 51,
          "author_first": "Neil",
          "author_middle": null,
          "author_last": "Cambell",
          "rank": 9,
          "appearences": {
              "total": 4000
          },
          "text_count": 20,
          image:null
        },
        {
          "_id": 51,
          "author_first": "Neil",
          "author_middle": null,
          "author_last": "Cambell",
          "rank": 10,
          "appearences": {
              "total": 4000
          },
          "text_count": 20,
          image:null
        },
        {
          "_id": 51,
          "author_first": "Neil",
          "author_middle": null,
          "author_last": "Cambell",
          "rank": 11,
          "appearences": {
              "total": 4000
          },
          "text_count": 20,
          image:null
        },
    ]
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

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <PublisherResult
          store={store}
        />, div)
})