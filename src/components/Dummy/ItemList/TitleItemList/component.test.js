import React from 'react'
import ReactDOM from 'react-dom'
import TitleItemList from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <TitleItemList objectItem={{}}/>, div)
})
