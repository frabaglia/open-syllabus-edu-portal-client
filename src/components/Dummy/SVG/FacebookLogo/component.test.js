import React from 'react'
import ReactDOM from 'react-dom'
import FacebookLogo from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <FacebookLogo colorOval="#FFFFFF" colorShape="#FFFFFF"/>, div)
})
