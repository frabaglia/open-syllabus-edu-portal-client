import React from 'react'
import ReactDOM from 'react-dom'
import FieldList from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <FieldList store={[{},{}]}/>, div)
})
