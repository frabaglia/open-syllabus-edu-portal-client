import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <Footer color="#FFFFFF"/>, div)
})