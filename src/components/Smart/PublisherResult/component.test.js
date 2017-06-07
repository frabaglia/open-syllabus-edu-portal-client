import React from 'react'
import ReactDOM from 'react-dom'
import SmartPublisherResult from './component'
import {Provider} from 'react-redux'
import store from '../../../store/index.js'


it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <SmartPublisherResult
          location={{query:{id:1}}}
        />
      </Provider>
      , div)
})
