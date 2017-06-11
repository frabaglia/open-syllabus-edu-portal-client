import React from 'react'
import ReactDOM from 'react-dom'
import UIContainer from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')

    const router = {
      pathname: '/'
    }

    ReactDOM.render(
        <UIContainer location={router}/>, div)
})
