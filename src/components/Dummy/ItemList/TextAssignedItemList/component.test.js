import React from 'react'
import ReactDOM from 'react-dom'
import TextAssignedItemList from './component'

const objectItem = {
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

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <TextAssignedItemList
          objectItem={objectItem}
        />, div)
})
