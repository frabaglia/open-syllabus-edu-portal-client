import React from 'react'
import ReactDOM from 'react-dom'
import ExpandCloseIcon from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ExpandCloseIcon/>, div)
})
