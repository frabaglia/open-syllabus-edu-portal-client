import React from 'react'
import ReactDOM from 'react-dom'
import ButtonExportCSV from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ButtonExportCSV/>, div)
})
