import React from 'react'
import ReactDOM from 'react-dom'
import ButtonDropdown from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ButtonDropdown
          title="title"
          open={true}
          color="#FFFFFF"
          clear={true}
          arrayData={[]}
        />, div)
})
