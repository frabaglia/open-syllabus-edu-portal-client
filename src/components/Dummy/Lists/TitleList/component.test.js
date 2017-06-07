import React from 'react'
import ReactDOM from 'react-dom'
import TitleList from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <TitleList store={[{},{}]}/>, div)
})
