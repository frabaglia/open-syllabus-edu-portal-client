import React from 'react'
import ReactDOM from 'react-dom'
import ContactIconEmail from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ContactIconEmail color="#FFFFFF"/>, div)
})
