import React from 'react'
import ReactDOM from 'react-dom'
import FieldItemList from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <FieldItemList objectItem={{}}/>, div)
})
