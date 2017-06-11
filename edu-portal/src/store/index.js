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
import Immutable, {
    Map
} from 'immutable'
import GlobalMessages from '../reducers/GlobalMessages/reducer'
import Landing from '../reducers/Landing/reducer'
import Result from '../reducers/Result/reducer'
import ResultsList from '../reducers/ResultsList/reducer'
import Router from '../reducers/Router/reducer'
import {loadState} from '../utils/SyllabusLocalStorage/component'

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
