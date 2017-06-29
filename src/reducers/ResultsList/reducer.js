import Immutable from 'immutable'

import {
    TYPE_TITLE,
    TYPE_AUTHOR,
    TYPE_FULL_TEXT,
    TYPE_INSTRUCTOR
} from '../../constants/eduportal/store-types'

import {
    TITLE_RESULTS_LIST_REQUEST,
    TITLE_RESULTS_LIST_SUCCESS
} from '../../constants/eduportal/action-types/TitleResultsList'

import {
    AUTHOR_RESULTS_LIST_REQUEST,
    AUTHOR_RESULTS_LIST_SUCCESS
} from '../../constants/eduportal/action-types/AuthorResultsList'

const initialResultsListState = Immutable.Map({
    TYPE_TITLE: Immutable.Map({
        isFetching: false,
        data: Immutable.Map(),
        updatedAt: false
    }),
    TYPE_AUTHOR: Immutable.Map({
        isFetching: false,
        data: Immutable.Map(),
        updatedAt: false
    }),
    updatedAt: false
})

export default function resultsList(resultsListState = initialResultsListState, action) {

    switch (action.type) {
        case TITLE_RESULTS_LIST_REQUEST:
            {
                return resultsListState.setIn([TYPE_TITLE, 'isFetching'], true)
                break
            }

        case TITLE_RESULTS_LIST_SUCCESS:
            {
                // let _resultsListState = resultsListState.setIn([TYPE_TITLE, 'data'], Immutable.List(action.payload.data))
                let _resultsListState = resultsListState.setIn([TYPE_TITLE, 'data'], Immutable.Map(action.payload.data.hits[0]))
                let __resultsListState = _resultsListState.setIn([TYPE_TITLE, 'updatedAt'], new Date())
                return __resultsListState.setIn([TYPE_TITLE, 'isFetching'], false)

                break
            }
        case AUTHOR_RESULTS_LIST_REQUEST:
            {
                return resultsListState.setIn([TYPE_AUTHOR, 'isFetching'], true)
                break
            }

        case AUTHOR_RESULTS_LIST_SUCCESS:
            {
                // let _resultsListState = resultsListState.setIn([TYPE_AUTHOR, 'data'], Immutable.List(action.payload.data))
                let _resultsListState = resultsListState.setIn([TYPE_AUTHOR, 'data'], Immutable.Map(action.payload.data.hits[0]))
                let __resultsListState = _resultsListState.setIn([TYPE_AUTHOR, 'updatedAt'], new Date())
                return __resultsListState.setIn([TYPE_AUTHOR, 'isFetching'], false)

                break
            }

        default:
            return resultsListState
    }
}
