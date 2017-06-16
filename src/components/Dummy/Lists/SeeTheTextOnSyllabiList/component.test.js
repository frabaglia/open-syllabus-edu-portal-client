import React from 'react'
import ReactDOM from 'react-dom'
import SeeTheTextOnSyllabiList from './component'

const store = [
  { // OR EXTERNAL LINKS, NO DB INDEXED?
    "_id": 55,
    "name": "Sociology 1",
    "url": "https://facebook.com"
  }]

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <SeeTheTextOnSyllabiList
          store={store}
        />, div)
})
