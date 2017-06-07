import React from 'react'
import ReactDOM from 'react-dom'
import TwitterLogo from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <TwitterLogo colorOval="#FFFFFF" colorShape="#FFFFFF"/>, div)
})
