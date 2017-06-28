import React from 'react'
import ReactDOM from 'react-dom'
import InstitutionItemList from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <InstitutionItemList objectItem={{}}/>, div)
})
