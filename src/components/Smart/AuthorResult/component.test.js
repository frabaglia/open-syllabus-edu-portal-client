import React from 'react'
import ReactDOM from 'react-dom'
import SmartTitleResult from './component'
import {Provider} from 'react-redux'
import store from '../../../store/index.js'


it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <SmartTitleResult/>
      </Provider>
      , div)
})
