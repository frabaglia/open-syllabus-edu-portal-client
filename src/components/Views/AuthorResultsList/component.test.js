import React from 'react'
import ReactDOM from 'react-dom'
import AuthorResultsList from './component'

const store={
  _id: 43,
  syllabus_count: 2000,
  author_list: [{
      "_id": 51,
      "author_first": "Neil",
      "author_middle": null,
      "author_last": "Cambell",
      "rank": 1,
      "appearences": {
        "total": 4000
      },
      "text_count": 20,
      image: null
    }
  ]
}
const router ={
  location:{
    pathname: 'somePathname'
  }
}
test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <AuthorResultsList store={store} router={router}/>, div)
})
