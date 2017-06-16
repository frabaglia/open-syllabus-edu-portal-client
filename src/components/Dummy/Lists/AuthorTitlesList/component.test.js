import React from 'react'
import ReactDOM from 'react-dom'
import AuthorTitlesList from './component'

const authors = [{
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
}]

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <AuthorTitlesList
          store={authors}
        />, div)
})
