import React from 'react'
import ReactDOM from 'react-dom'
import FeatureContainer from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <FeatureContainer color="#FFFFFF"/>, div)
})
