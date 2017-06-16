import React from 'react'
import ReactDOM from 'react-dom'
import SchoolsIcon from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <SchoolsIcon color="#FFFFFF"/>, div)
})
