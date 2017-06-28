import React from 'react'
import ReactDOM from 'react-dom'
import UIContainer from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')

    const router = {
      pathname: '/'
    }

    ReactDOM.render(
        <UIContainer location={router}/>, div)
})
