import React from 'react'
import ReactDOM from 'react-dom'
import CountryItemList from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <CountryItemList objectItem={{}}/>, div)
})
