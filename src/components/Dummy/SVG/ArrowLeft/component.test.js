import React from 'react'
import ReactDOM from 'react-dom'
import ArrowLeft from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ArrowLeft color="#FFFFFF"/>, div)
})
