import React from 'react'
import ReactDOM from 'react-dom'
import CountryList from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <CountryList store={[{},{}]}/>, div)
})
