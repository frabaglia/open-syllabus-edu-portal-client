import React from 'react'
import ReactDOM from 'react-dom'
import ButtonBadge from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ButtonBadge count={240} type={1} title="title"/>, div)
})
