import React from 'react'
import ReactDOM from 'react-dom'
import CloseMobile from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <CloseMobile click={() => {}}/>, div)
})
