import React from 'react'
import ReactDOM from 'react-dom'
import InstructorEmailsResultsList from './component'

const store={
  syllabus_count: 2000
}

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <InstructorEmailsResultsList store={store}/>, div)
})
