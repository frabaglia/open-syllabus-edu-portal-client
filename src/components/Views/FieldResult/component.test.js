import React from 'react'
import ReactDOM from 'react-dom'
import DummyFieldResult from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <DummyFieldResult/>, div)
})
