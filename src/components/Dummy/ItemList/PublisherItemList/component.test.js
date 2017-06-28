import React from 'react'
import ReactDOM from 'react-dom'
import PublisherItemList from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <PublisherItemList objectItem={{}}/>, div)
})
