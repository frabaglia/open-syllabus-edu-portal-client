import React from 'react'
import ReactDOM from 'react-dom'
import MostFrecuentInstitutionItemList from './component'

const object = {
  rank: 1,
  name: 'name',
  _id: 1,
  country: 'country'
}

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <MostFrecuentInstitutionItemList
          objectItem={object}
        />, div)
})
