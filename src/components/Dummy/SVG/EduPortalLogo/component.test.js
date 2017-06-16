import React from 'react'
import ReactDOM from 'react-dom'
import EduPortalLogo from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <EduPortalLogo color="#FFFFFF"/>, div)
})
