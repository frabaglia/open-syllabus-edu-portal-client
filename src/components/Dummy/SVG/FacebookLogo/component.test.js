import React from 'react'
import ReactDOM from 'react-dom'
import FacebookLogo from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <FacebookLogo colorOval="#FFFFFF" colorShape="#FFFFFF"/>, div)
})
