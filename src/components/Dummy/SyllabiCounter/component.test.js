import React from 'react'
import ReactDOM from 'react-dom'
import SyllabiCounter from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        SyllabiCounter({
          subtitle: 'someSubtitle'
        }), div)
})
