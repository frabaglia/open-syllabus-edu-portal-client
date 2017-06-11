import React from 'react'
import ReactDOM from 'react-dom'
import FieldList from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <FieldList store={[{},{}]}/>, div)
})
