import React from 'react'
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import ReactDOM from 'react-dom'
import NavBar from './component'
import store from '../../../store/index.js'

it('NavBar renders without crashing', () => {
    const div = document.createElement('div')

    const history = syncHistoryWithStore(browserHistory, store, {
      selectLocationState (state) {
          return state.get('routing').toObject();
      }
    });

    ReactDOM.render(
        <Router history={history}>
        <NavBar/>
    </Router>, div)
})
