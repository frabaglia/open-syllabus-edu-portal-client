import React from 'react'
import ReactDOM from 'react-dom'
import InstitutionResult from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <InstitutionResult/>, div)
})
