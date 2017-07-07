import React from 'react'
import ReactDOM from 'react-dom'
import SyllabiPreviewWrapper from './component'

const children = <div></div>
const data={
  field: 'someField',
  year: 'someYear',
  title: 'someTitle',
  email: 'someEmail'
}

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <SyllabiPreviewWrapper
          data={data}
          >
          {children}
        </SyllabiPreviewWrapper>
        , div)
})
