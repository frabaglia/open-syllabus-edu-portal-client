import React from 'react'
import ReactDOM from 'react-dom'
import SyllabiList from './component'

const store = [{
  data:{
    "rank": 1,
    title:{
      "titleName": "someTitleName",
      "titleEmail":"someTitleEmail"
    }
  },
  dataWrapper:{
    field: 'someField',
    year: 'someYear',
    title: 'someTitle',
    email: 'someEmail'
  }
}]

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <SyllabiList store={store}/>, div)
})
