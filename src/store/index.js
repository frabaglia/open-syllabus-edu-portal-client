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
import GlobalMessages from '../reducers/GlobalMessages/reducer.js'
import Landing from '../reducers/Landing/reducer.js'
import Result from '../reducers/Result/reducer.js'
import ResultsList from '../reducers/ResultsList/reducer.js'
import Router from '../reducers/Router/reducer.js'
import Immutable from 'immutable'

import {
  loadState
} from '../os-toolkit/SyllabusLocalStorage/component'

const middleware = applyMiddleware(reduxThunk, reduxLogger())

let rootReducer = combineReducers({
    GlobalMessages,
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
