import React from 'react'
import ReactDOM from 'react-dom'
import SchoolsIcon from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <SchoolsIcon color="#FFFFFF"/>, div)
})
