import React from 'react'
import ReactDOM from 'react-dom'
import ContactIconPhone from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ContactIconPhone color="#FFFFFF"/>, div)
})
