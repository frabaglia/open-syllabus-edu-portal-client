import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import DummyAuthorResultsList from './component'
import store from '../../../store/index.js'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <Provider store={store}>
        <DummyAuthorResultsList
          store={[{},{}]}
          currentCategory={'CurrentFilterCategory'}
          category={'category'}
          inputString={ () => {}}
          makeSearch={() => {}}
          currentParamData={[]}
          currentParamsQuery={[]}/>
    </Provider>, div)
})
