import React from 'react'
import ReactDOM from 'react-dom'
import InstitutionList from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <InstitutionList store={[{},{}]}/>, div)
})
