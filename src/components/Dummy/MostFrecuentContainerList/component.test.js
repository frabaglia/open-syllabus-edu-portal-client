import React from 'react'
import ReactDOM from 'react-dom'
import MostFrecuentContainerList from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <MostFrecuentContainerList
          router={{}}
          getCurrentCategory={()=>{}}
          currentCategoryData={[{},{}]}
        />, div)
})
