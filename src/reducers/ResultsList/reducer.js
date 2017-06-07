import Immutable from 'immutable'

import {
    TYPE_TITLE,
    TYPE_AUTHOR,
    TYPE_INSTITUTION,
    TYPE_FIELD,
    TYPE_COUNTRY,
    TYPE_PUBLISHER,
    TYPE_INSTITUTION_FIELD
} from '../../constants/action-types/store'

import {
    TITLE_RESULTS_LIST_REQUEST,
    TITLE_RESULTS_LIST_SUCCESS
} from '../../constants/actions/TitleResultsList/actions'

import {
    AUTHOR_RESULTS_LIST_REQUEST,
    AUTHOR_RESULTS_LIST_SUCCESS
} from '../../constants/actions/AuthorResultsList/actions'

import {
    FIELD_RESULTS_LIST_REQUEST,
    FIELD_RESULTS_LIST_SUCCESS
} from '../../constants/actions/FieldResultsList/actions'

import {
    COUNTRY_RESULTS_LIST_REQUEST,
    COUNTRY_RESULTS_LIST_SUCCESS
} from '../../constants/actions/CountryResultsList/actions'

import {
    INSTITUTION_RESULTS_LIST_REQUEST,
    INSTITUTION_RESULTS_LIST_SUCCESS
} from '../../constants/actions/InstitutionResultsList/actions'

import {
    PUBLISHER_RESULTS_LIST_REQUEST,
    PUBLISHER_RESULTS_LIST_SUCCESS
} from '../../constants/actions/PublisherResultsList/actions'

const initialResultsListState = Immutable.Map({
    TYPE_TITLE: Immutable.Map({
        isFetching: false,
        data: Immutable.List(),
        updatedAt: false
    }),
    TYPE_AUTHOR: Immutable.Map({
        isFetching: false,
        data: Immutable.List(),
        updatedAt: false
    }),
    TYPE_INSTITUTION: Immutable.Map({
        isFetching: false,
        data: Immutable.List(),
        updatedAt: false
    }),
    TYPE_FIELD: Immutable.Map({
        isFetching: false,
        data: Immutable.List(),
        updatedAt: false
    }),
    TYPE_COUNTRY: Immutable.Map({
        isFetching: false,
        data: Immutable.List(),
        updatedAt: false
    }),
    TYPE_PUBLISHER: Immutable.Map({
        isFetching: false,
        data: Immutable.List(),
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
                let _resultsListState = resultsListState.setIn([TYPE_TITLE, 'data'], Immutable.List(action.payload.data))
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
                let _resultsListState = resultsListState.setIn([TYPE_AUTHOR, 'data'], Immutable.List(action.payload.data))
                let __resultsListState = _resultsListState.setIn([TYPE_AUTHOR, 'updatedAt'], new Date())
                return __resultsListState.setIn([TYPE_AUTHOR, 'isFetching'], false)

                break
            }

        case FIELD_RESULTS_LIST_REQUEST:
            {
                return resultsListState.setIn([TYPE_FIELD, 'isFetching'], true)
                break
            }

        case FIELD_RESULTS_LIST_SUCCESS:
            {
                let _resultsListState = resultsListState.setIn([TYPE_FIELD, 'data'], Immutable.List(action.payload.data))
                let __resultsListState = _resultsListState.setIn([TYPE_FIELD, 'updatedAt'], new Date())
                return __resultsListState.setIn([TYPE_FIELD, 'isFetching'], false)

                break
            }

        case COUNTRY_RESULTS_LIST_REQUEST:
            {
                return resultsListState.setIn([TYPE_COUNTRY, 'isFetching'], true)
                break
            }

        case COUNTRY_RESULTS_LIST_SUCCESS:
            {
                let _resultsListState = resultsListState.setIn([TYPE_COUNTRY, 'data'], Immutable.List(action.payload.data))
                let __resultsListState = _resultsListState.setIn([TYPE_COUNTRY, 'updatedAt'], new Date())
                return __resultsListState.setIn([TYPE_COUNTRY, 'isFetching'], false)

                break
            }

        case PUBLISHER_RESULTS_LIST_REQUEST:
            {
                return resultsListState.setIn([TYPE_PUBLISHER, 'isFetching'], true)
                break
            }

        case PUBLISHER_RESULTS_LIST_SUCCESS:
            {
                let _resultsListState = resultsListState.setIn([TYPE_PUBLISHER, 'data'], Immutable.List(action.payload.data))
                let __resultsListState = _resultsListState.setIn([TYPE_PUBLISHER, 'updatedAt'], new Date())
                return __resultsListState.setIn([TYPE_PUBLISHER, 'isFetching'], false)

                break
            }

        case INSTITUTION_RESULTS_LIST_REQUEST:
            {
                return resultsListState.setIn([TYPE_INSTITUTION, 'isFetching'], true)
                break
            }

        case INSTITUTION_RESULTS_LIST_SUCCESS:
            {
                let _resultsListState = resultsListState.setIn([TYPE_INSTITUTION, 'data'], Immutable.List(action.payload.data))
                let __resultsListState = _resultsListState.setIn([TYPE_INSTITUTION, 'updatedAt'], new Date())
                return __resultsListState.setIn([TYPE_INSTITUTION, 'isFetching'], false)

                break
            }

        default:
            return resultsListState
    }
}
