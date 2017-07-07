import {
  applyMiddleware,
  createStore,
  compose
} from 'redux'
import {
  combineReducers
} from 'redux-immutable'
import reduxLogger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import {
  apiMiddleware
} from '../middlewares/api'
import {
  errorMiddleware
} from '../middlewares/error'
import {
  redirectMiddleware
} from '../middlewares/redirect'
import Global from '../reducers/Global'
import Landing from '../reducers/Landing'
import Result from '../reducers/Result'
import ResultsList from '../reducers/ResultsList'
import Router from '../reducers/Router'
import Immutable from 'immutable'

import {
  loadState
} from '../os-toolkit/SyllabusLocalStorage'

const middleware = applyMiddleware(apiMiddleware, errorMiddleware, redirectMiddleware, reduxLogger())

let rootReducer = combineReducers({
  Global,
  Landing,
  Result,
  ResultsList,
  routing: Router
})

const initialState = Immutable.Map({})

/********************************************************/
/* localStorage : Initializing local DB                 */
/********************************************************/

const persistedStorage = (typeof loadState() === 'undefined') ? initialState : loadState()

/**********************************************************************************/
/* This enhancer let's Redux Dev Tools (Chrome ext.) to find the app store        */
/**********************************************************************************/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, persistedStorage, composeEnhancers(middleware))
