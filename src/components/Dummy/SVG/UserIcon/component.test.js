import React from 'react'
import ReactDOM from 'react-dom'
import UserIcon from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <UserIcon/>, div)
})
