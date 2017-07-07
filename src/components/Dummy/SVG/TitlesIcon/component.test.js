import React from 'react'
import ReactDOM from 'react-dom'
import TitlesIcon from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <TitlesIcon color="#FFFFFF"/>, div)
})
