import React from 'react'
import ReactDOM from 'react-dom'
import TitleResultsList from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <TitleResultsList/>, div)
})
