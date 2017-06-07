import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import DummyPublisherResultsList from './component'
import store from '../../../store/index.js'

/******************************************************************************/
/* Should inject store just not to fail with this.props.dispatch availability */
/******************************************************************************/

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <Provider store={store}>
        <DummyPublisherResultsList
          store={[{},{}]}
          currentCategory={'CurrentFilterCategory'}
          category={'category'}
          inputString={ () => {}}
          makeSearch={() => {}}
          currentParamData={[]}
          currentParamsQuery={[]}/>
    </Provider>, div)
})
