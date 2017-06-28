import React from 'react'
import ReactDOM from 'react-dom'
import GithubLogo from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <GithubLogo colorOval="#FFFFFF" colorShape="#FFFFFF"/>, div)
})
