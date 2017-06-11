import React from 'react'
import ReactDOM from 'react-dom'
import SyllabusLogo from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <SyllabusLogo colorOpenSyllabu="#FFFFFF" colorExplore="#FFFFFF"/>, div)
})
