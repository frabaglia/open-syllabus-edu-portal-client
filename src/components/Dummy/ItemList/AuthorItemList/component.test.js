import React from 'react'
import ReactDOM from 'react-dom'
import AuthorItemList from './component'

const author = {
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
}

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <AuthorItemList objectItem={author}/>, div)
})
