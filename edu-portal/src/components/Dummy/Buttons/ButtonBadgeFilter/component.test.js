import React from 'react'
import ReactDOM from 'react-dom'
import ButtonBadgeFilter from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ButtonBadgeFilter count={240} type={1} title="title"/>, div)
})
