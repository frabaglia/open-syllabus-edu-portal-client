import React from 'react'
import ReactDOM from 'react-dom'
import BadgeContainer from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BadgeContainer color="#FFFFFF"/>, div)
})
