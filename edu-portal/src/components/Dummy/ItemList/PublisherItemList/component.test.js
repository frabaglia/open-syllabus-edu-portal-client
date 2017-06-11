import React from 'react'
import ReactDOM from 'react-dom'
import PublisherItemList from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <PublisherItemList objectItem={{}}/>, div)
})
