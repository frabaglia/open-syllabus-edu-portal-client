import React from 'react'
import ReactDOM from 'react-dom'
import ButtonPagination from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ButtonPagination click={() => {}} title="title"/>, div)
})
