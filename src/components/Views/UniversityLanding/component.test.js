import React from 'react'
import ReactDOM from 'react-dom'
import UniversityLanding from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <UniversityLanding/>, div)
})
