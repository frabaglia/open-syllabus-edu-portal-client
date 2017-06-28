import React from 'react'
import ReactDOM from 'react-dom'
import ExpandIcon from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ExpandIcon/>, div)
})
