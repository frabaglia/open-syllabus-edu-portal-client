import React from 'react'
import ReactDOM from 'react-dom'
import PublisherList from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <PublisherList store={[{},{}]}/>, div)
})
