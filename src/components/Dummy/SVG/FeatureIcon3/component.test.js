import React from 'react'
import ReactDOM from 'react-dom'
import FeatureIcon3 from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <FeatureIcon3 color="#FFFFFF"/>, div)
})
