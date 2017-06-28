import React from 'react'
import ReactDOM from 'react-dom'
import InstructorEmailsResultsList from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <InstructorEmailsResultsList/>, div)
})
