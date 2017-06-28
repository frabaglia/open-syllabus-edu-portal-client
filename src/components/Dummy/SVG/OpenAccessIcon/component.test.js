import React from 'react'
import ReactDOM from 'react-dom'
import OpenAccessIcon from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <OpenAccessIcon/>, div)
})
