import React from 'react'
import ReactDOM from 'react-dom'
import ButtonLabel from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ButtonLabel backgroundColor="#FFFFFF" color="#FFFFFF" border="#FFFFFF" title="title"/>, div)
})
