import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import DummyTitleResultsList from './component'
import store from '../../../store/index.js'

/******************************************************************************/
/* Should inject store just not to fail with this.props.dispatch availability */
/******************************************************************************/

const titles = [{
  "_id": 52,
  "rank": 1,
  "name": "Text name",
  "author": {
      "_id": 51,
      "author_first": "Neil",
      "author_middle": null,
      "author_last": "Cambell",
  },
  "appearences": {
      "total": 100
  },
  "score": 9.9,
  "pub_year":1943
}]

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <Provider store={store}>
        <DummyTitleResultsList
          store={titles}
          currentCategory={'CurrentFilterCategory'}
          category={'category'}
          inputString={ () => {}}
          makeSearch={() => {}}
          currentParamData={[]}
          currentParamsQuery={[]}
        />
    </Provider>, div)
})
