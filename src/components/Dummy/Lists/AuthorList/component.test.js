import React from 'react'
import ReactDOM from 'react-dom'
import AuthorList from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <AuthorList store={[{},{}]}/>, div)
})
