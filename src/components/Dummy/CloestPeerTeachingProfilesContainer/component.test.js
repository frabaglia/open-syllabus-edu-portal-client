import React from 'react'
import ReactDOM from 'react-dom'
import CloestPeerTeachingProfilesContainer from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <CloestPeerTeachingProfilesContainer store={[{},{}]}/>, div)
})
