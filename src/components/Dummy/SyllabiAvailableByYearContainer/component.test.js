import React from 'react'
import ReactDOM from 'react-dom'
import SyllabiAvailableByYearContainer from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <SyllabiAvailableByYearContainer store={[{},{}]}/>, div)
})
