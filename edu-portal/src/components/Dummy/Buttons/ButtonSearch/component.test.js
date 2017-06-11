import React from 'react'
import ReactDOM from 'react-dom'
import ButtonSearch from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ButtonSearch/>, div)
})
