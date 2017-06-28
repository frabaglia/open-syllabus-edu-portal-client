import React from 'react'
import ReactDOM from 'react-dom'
import AuthorsIcon from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <AuthorsIcon color="#FFFFFF"/>, div)
})
