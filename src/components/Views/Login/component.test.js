import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import DummyLogin from './component'
import store from '../../../store/index.js'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <Provider store={store}>
          <DummyLogin
            router={{}}
            getCurrentCategory={()=>{}}
            currentCategoryData={[{},{}]}
          />
        </Provider>, div)
})
