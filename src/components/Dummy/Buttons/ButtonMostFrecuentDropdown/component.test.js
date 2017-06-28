import React from 'react'
import ReactDOM from 'react-dom'
import ButtonMostFrecuentDropdown from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ButtonMostFrecuentDropdown title="title" click={() => {}}/>, div)
})
