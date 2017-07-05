import React from 'react'
import ReactDOM from 'react-dom'
import FullTextResultList from './component'

const store={
  syllabus_count: 2000
}

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <FullTextResultList store={store}/>, div)
})
