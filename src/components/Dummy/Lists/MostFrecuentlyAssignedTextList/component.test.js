import React from 'react'
import ReactDOM from 'react-dom'
import MostFrecuentlyAssignedTextList from './component'

const store = [{
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
}]

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <MostFrecuentlyAssignedTextList
          store={store}
        />, div)
})
