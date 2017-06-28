import React from 'react'
import ReactDOM from 'react-dom'
import InstitutionList from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <InstitutionList store={[{},{}]}/>, div)
})
