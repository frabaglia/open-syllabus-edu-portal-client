import React from 'react'
import ReactDOM from 'react-dom'
import AuthorItemList from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <AuthorItemList objectItem={{}}/>, div)
})
