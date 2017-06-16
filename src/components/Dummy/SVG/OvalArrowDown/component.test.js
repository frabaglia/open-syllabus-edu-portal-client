import React from 'react'
import ReactDOM from 'react-dom'
import OvalArrowDown from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <OvalArrowDown color="#FFFFFF"/>, div)
})
