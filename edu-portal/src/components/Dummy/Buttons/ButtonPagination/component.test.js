import React from 'react'
import ReactDOM from 'react-dom'
import ButtonPagination from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ButtonPagination click={() => {}} title="title"/>, div)
})
