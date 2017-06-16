import React from 'react'
import ReactDOM from 'react-dom'
import FieldsIcon from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <FieldsIcon color="#FFFFFF"/>, div)
})
