import React from 'react'
import ReactDOM from 'react-dom'
import GithubLogo from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <GithubLogo colorOval="#FFFFFF" colorShape="#FFFFFF"/>, div)
})
