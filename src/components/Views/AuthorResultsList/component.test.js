import React from 'react'
import ReactDOM from 'react-dom'
import AuthorResultsList from './component'

const store={
  syllabus_count: 2000
}

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <AuthorResultsList store={store}/>, div)
})
