import React from 'react'
import ReactDOM from 'react-dom'
import ConfigIcon from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ConfigIcon/>, div)
})
