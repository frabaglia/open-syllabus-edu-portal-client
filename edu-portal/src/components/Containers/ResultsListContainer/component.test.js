import React from 'react'
import ReactDOM from 'react-dom'
import ResultsListContainer from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ResultsListContainer/>, div)
})
