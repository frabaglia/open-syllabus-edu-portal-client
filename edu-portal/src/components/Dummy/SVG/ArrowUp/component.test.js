import React from 'react'
import ReactDOM from 'react-dom'
import ArrowUp from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ArrowUp color="#FFFFFF"/>, div)
})
