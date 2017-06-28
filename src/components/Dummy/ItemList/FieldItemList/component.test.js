import React from 'react'
import ReactDOM from 'react-dom'
import FieldItemList from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <FieldItemList objectItem={{}}/>, div)
})
