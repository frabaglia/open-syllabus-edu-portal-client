import React from 'react'
import ReactDOM from 'react-dom'
import FullTextResultList from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <FullTextResultList/>, div)
})
