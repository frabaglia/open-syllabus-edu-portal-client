import React from 'react'
import ReactDOM from 'react-dom'
import Filter from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <Filter
          filter={{title: 'title', number: 10}}
          filtersCategory={['titles','authors']}
          currentCategory={'currentCategory'}
          category={'category'}
          inputString={() => {}}
          makeSearch={() =>{}}
          paramData={[]}
          currentParamsQuery={[]}
        />, div)
})
