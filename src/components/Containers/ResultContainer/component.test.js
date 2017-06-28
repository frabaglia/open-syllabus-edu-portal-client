import React from 'react'
import ReactDOM from 'react-dom'
import ResultContainer from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ResultContainer
      />, div)
})
