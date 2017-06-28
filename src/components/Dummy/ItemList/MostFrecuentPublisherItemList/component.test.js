import React from 'react'
import ReactDOM from 'react-dom'
import MostFrecuentPublisherItemList from './component'

const object = {
  rank: 1,
  name: 'name',
  _id: 1
}


test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <MostFrecuentPublisherItemList
          objectItem={object}
        />, div)
})
