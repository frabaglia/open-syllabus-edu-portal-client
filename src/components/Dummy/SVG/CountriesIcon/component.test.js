import React from 'react'
import ReactDOM from 'react-dom'
import CountriesIcon from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <CountriesIcon color="#FFFFFF"/>, div)
})
