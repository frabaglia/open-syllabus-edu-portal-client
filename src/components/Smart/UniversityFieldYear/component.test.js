import React from 'react'
import ReactDOM from 'react-dom'
import SmartUniversityFieldYear from './component'
import {Provider} from 'react-redux'
import store from '../../../store/index.js'


it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <SmartUniversityFieldYear/>
      </Provider>
      , div)
})
