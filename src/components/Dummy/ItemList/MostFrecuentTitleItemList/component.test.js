import React from 'react'
import ReactDOM from 'react-dom'
import MostFrecuentTitleItemList from './component'

const object = {
  rank: 1,
  name: 'name',
  _id: 1,
  author_first: 'author_first',
  author_middle: 'author_middle',
  author_last: 'author_last'
}


test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <MostFrecuentTitleItemList
            objectItem={object}
        />, div)
})
