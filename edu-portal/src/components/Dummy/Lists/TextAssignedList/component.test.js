import React from 'react'
import ReactDOM from 'react-dom'
import TextAssignedList from './component'

const store = [{
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
}]

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <TextAssignedList
          store={store}
        />, div)
})
