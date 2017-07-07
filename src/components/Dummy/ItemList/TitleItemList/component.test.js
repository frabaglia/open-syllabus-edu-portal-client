import React from 'react'
import ReactDOM from 'react-dom'
import TitleItemList from './component'

const objectItem = {
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
  "pub_year":1943
}

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <TitleItemList objectItem={objectItem}/>, div)
})
