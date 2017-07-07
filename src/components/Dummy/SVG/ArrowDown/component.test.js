import React from 'react'
import ReactDOM from 'react-dom'
import ArrowDown from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ArrowDown color="#FFFFFF"/>, div)
})
