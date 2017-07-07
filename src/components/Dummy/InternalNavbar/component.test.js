import React from 'react'
import ReactDOM from 'react-dom'
import InternalNavbar from './component'

const router ={
  location:{
    pathname: 'somePathname'
  }
}

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <InternalNavbar router={router}/>, div)
})
