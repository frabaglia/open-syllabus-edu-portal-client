import React from 'react'
import ReactDOM from 'react-dom'
import SyllabiItemList from './component'

const objectItem = {
  "rank": 1,
  title:{
    "titleName": "someTitleName",
    "titleEmail":"someTitleEmail"
  }
}

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <SyllabiItemList objectItem={objectItem}/>, div)
})
