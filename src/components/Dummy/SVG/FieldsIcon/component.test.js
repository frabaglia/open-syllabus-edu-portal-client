import React from 'react'
import ReactDOM from 'react-dom'
import FieldsIcon from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <FieldsIcon color="#FFFFFF"/>, div)
})
