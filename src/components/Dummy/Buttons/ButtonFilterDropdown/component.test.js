import React from 'react'
import ReactDOM from 'react-dom'
import ButtonFilterDropdown from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ButtonFilterDropdown
          title="title"
          open={true}
          color="#FFFFFF"
          clear={true}
          arrayData={[]}
        />, div)
})
