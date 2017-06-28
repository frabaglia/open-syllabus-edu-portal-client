import React from 'react'
import ReactDOM from 'react-dom'
import MenuMobile from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <MenuMobile click={() => {}}/>, div)
})
