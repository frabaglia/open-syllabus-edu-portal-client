import React from 'react'
import ReactDOM from 'react-dom'
import ToolTip from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ToolTip/>, div)
})
