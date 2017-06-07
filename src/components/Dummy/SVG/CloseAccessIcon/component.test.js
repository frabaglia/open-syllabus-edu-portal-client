import React from 'react'
import ReactDOM from 'react-dom'
import CloseAccessIcon from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <CloseAccessIcon/>, div)
})
