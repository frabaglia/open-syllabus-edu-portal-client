import React from 'react'
import ReactDOM from 'react-dom'
import ButtonBarChartDropdown from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ButtonBarChartDropdown title="title" click={() => {}}/>, div)
})
