import React from 'react'
import ReactDOM from 'react-dom'
import ArrowDown from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ArrowDown color="#FFFFFF"/>, div)
})
