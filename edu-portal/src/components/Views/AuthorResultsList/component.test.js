import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import DummyAuthorResultsList from './component'
import store from '../../../store/index.js'

const authors = [{
  "_id": 51,
  "author_first": "Neil",
  "author_middle": null,
  "author_last": "Cambell",
  "rank": 1,
  "appearences": {
      "total": 4000
  },
  "text_count": 20,
  image:null
}]

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <Provider store={store}>
        <DummyAuthorResultsList
          store={authors}
          currentCategory={'CurrentFilterCategory'}
          category={'category'}
          inputString={ () => {}}
          makeSearch={() => {}}
          currentParamData={[]}
          currentParamsQuery={[]}/>
    </Provider>, div)
})
