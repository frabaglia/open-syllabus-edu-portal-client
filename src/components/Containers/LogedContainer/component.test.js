import React from 'react'
import ReactDOM from 'react-dom'
import LogedContainer from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <LogedContainer
      />, div)
})