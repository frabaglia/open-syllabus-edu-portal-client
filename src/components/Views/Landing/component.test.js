import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import DummyLanding from './component'
import store from '../../../store/index.js'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <Provider store={store}>
          <DummyLanding
            router={{}}
            getCurrentCategory={()=>{}}
            currentCategoryData={[{},{}]}
          />
        </Provider>, div)
})
