import React from 'react'
import ReactDOM from 'react-dom'
import MostFrecuentCountrydItemList from './component'

const object = {
  rank: 1,
  name: 'name'
}

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <MostFrecuentCountrydItemList
          objectItem={object}
        />, div)
})
