import React from 'react'
import ReactDOM from 'react-dom'
import PublishersIcon from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <PublishersIcon color="#FFFFFF"/>, div)
})
