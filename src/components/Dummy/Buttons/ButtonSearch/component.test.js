import React from 'react'
import ReactDOM from 'react-dom'
import ButtonSearch from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ButtonSearch/>, div)
})
