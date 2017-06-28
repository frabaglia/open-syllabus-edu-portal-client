import React from 'react'
import ReactDOM from 'react-dom'
import ContainerList from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ContainerList list="list"/>, div)
})
