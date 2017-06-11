import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import store from '../../../store/index.js'
import Footer from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')

    const history = syncHistoryWithStore(browserHistory, store, {
      selectLocationState (state) {
          return state.get('routing').toObject();
      }
    });

    ReactDOM.render(
      <Router history={history}>
        <Footer/>
      </Router>, div)
})
