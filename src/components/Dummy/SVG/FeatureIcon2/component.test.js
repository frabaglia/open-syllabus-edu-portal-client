import React from 'react'
import ReactDOM from 'react-dom'
import FeatureIcon2 from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <FeatureIcon2 color="#FFFFFF"/>, div)
})
