import React from 'react'
import ReactDOM from 'react-dom'
import ButtonClearFilter from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ButtonClearFilter/>, div)
})
