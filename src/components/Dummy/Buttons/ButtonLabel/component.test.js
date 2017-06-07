import React from 'react'
import ReactDOM from 'react-dom'
import ButtonLabel from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ButtonLabel backgroundColor="#FFFFFF" color="#FFFFFF" border="#FFFFFF" title="title"/>, div)
})
