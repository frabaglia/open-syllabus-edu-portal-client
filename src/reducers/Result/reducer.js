import Immutable from 'immutable';

import {
    TYPE_TITLE,
    TYPE_AUTHOR,
    TYPE_INSTITUTION,
    TYPE_FIELD,
    TYPE_COUNTRY,
    TYPE_PUBLISHER,
    TYPE_INSTITUTION_FIELD,
    TYPE_COUNTRY_FIELD,
} from '../../store/storeTypes'

import {
    TITLE_RESULT_REQUEST,
    TITLE_RESULT_SUCCESS
} from '../../constants/actions/TitleResult'

import {
    AUTHOR_RESULT_REQUEST,
    AUTHOR_RESULT_SUCCESS
} from '../../constants/actions/AuthorResult'

import {
    FIELD_RESULT_REQUEST,
    FIELD_RESULT_SUCCESS
} from '../../constants/actions/FieldResult'

import {
    COUNTRY_RESULT_REQUEST,
    COUNTRY_RESULT_SUCCESS
} from '../../constants/actions/CountryResult'

import {
    INSTITUTION_RESULT_REQUEST,
    INSTITUTION_RESULT_SUCCESS
} from '../../constants/actions/InstitutionResult'

import {
    PUBLISHER_RESULT_REQUEST,
    PUBLISHER_RESULT_SUCCESS
} from '../../constants/actions/PublisherResult'

import {
    INSTITUTION_FIELD_RESULT_REQUEST,
    INSTITUTION_FIELD_RESULT_SUCCESS
} from '../../constants/actions/InstitutionFieldResult'

const initialResultState = Immutable.Map({
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
    TYPE_COUNTRY: Immutable.Map({
        isFetching: false,
        data: Immutable.Map(),
        updatedAt: false
    }),
    TYPE_INSTITUTION: Immutable.Map({
        isFetching: false,
        data: Immutable.Map(),
        updatedAt: false
    }),
    TYPE_FIELD: Immutable.Map({
        isFetching: false,
        data: Immutable.Map(),
        updatedAt: false
    }),
    TYPE_INSTITUTION_FIELD: Immutable.Map({
        isFetching: false,
        data: Immutable.Map(),
        updatedAt: false
    }),
    TYPE_COUNTRY_FIELD: Immutable.Map({
        isFetching: false,
        data: Immutable.Map(),
        updatedAt: false
    }),
    TYPE_PUBLISHER: Immutable.Map({
        isFetching: false,
        data: Immutable.Map(),
        updatedAt: false
    }),
    updatedAt: false
})

export default function resultsList(resultState = initialResultState, action) {

    switch (action.type) {
        case TITLE_RESULT_REQUEST:
            {
                return resultState.setIn([TYPE_TITLE, 'isFetching'], true)
                break
            }

        case TITLE_RESULT_SUCCESS:
            {
                let _resultState = resultState.setIn([TYPE_TITLE, 'data'], Immutable.Map(action.payload.data))
                let __resultState = _resultState.setIn(['updatedAt'], new Date())
                return __resultState.setIn([TYPE_TITLE, 'isFetching'], false)
                break
            }
        case AUTHOR_RESULT_REQUEST:
            {
                return resultState.setIn([TYPE_AUTHOR, 'isFetching'], true)
                break
            }

        case AUTHOR_RESULT_SUCCESS:
            {
                let _resultState = resultState.setIn([TYPE_AUTHOR, 'data'], Immutable.Map(action.payload.data))
                let __resultState = _resultState.setIn(['updatedAt'], new Date())
                return __resultState.setIn([TYPE_AUTHOR, 'isFetching'], false)
                break
            }

        case FIELD_RESULT_REQUEST:
            {
                return resultState.setIn([TYPE_FIELD, 'isFetching'], true)
                break
            }

        case FIELD_RESULT_SUCCESS:
            {
                let _resultState = resultState.setIn([TYPE_FIELD, 'data'], Immutable.Map(action.payload.data))
                let __resultState = _resultState.setIn(['updatedAt'], new Date())
                return __resultState.setIn([TYPE_FIELD, 'isFetching'], false)
                break
            }

        case INSTITUTION_FIELD_RESULT_REQUEST:
            {
                return resultState.setIn([TYPE_INSTITUTION_FIELD, 'isFetching'], true)
                break
            }

        case INSTITUTION_FIELD_RESULT_SUCCESS:
            {
                let _resultState = resultState.setIn([TYPE_INSTITUTION_FIELD, 'data'], Immutable.Map(action.payload.data))
                let __resultState = _resultState.setIn(['updatedAt'], new Date())
                return __resultState.setIn([TYPE_INSTITUTION_FIELD, 'isFetching'], false)
                break
            }

        // case COUNTRY_FIELD_RESULT_REQUEST:
        //     {
        //         return resultState.setIn([TYPE_COUNTRY_FIELD, 'isFetching'], true)
        //         break
        //     }
        //
        // case COUNTRY_FIELD_RESULT_SUCCESS:
        //     {
        //         let _resultState = resultState.setIn([TYPE_COUNTRY_FIELD, 'data'], Immutable.Map(action.payload.data))
        //         let __resultState = _resultState.setIn(['updatedAt'], new Date())
        //         return __resultState.setIn([TYPE_COUNTRY_FIELD, 'isFetching'], false)
        //         break
        //     }

        case PUBLISHER_RESULT_REQUEST:
            {
                return resultState.setIn([TYPE_PUBLISHER, 'isFetching'], true)
                break
            }

        case PUBLISHER_RESULT_SUCCESS:
            {
                let _resultState = resultState.setIn([TYPE_PUBLISHER, 'data'], Immutable.Map(action.payload.data))
                let __resultState = _resultState.setIn(['updatedAt'], new Date())
                return __resultState.setIn([TYPE_PUBLISHER, 'isFetching'], false)
                break
            }

        case COUNTRY_RESULT_REQUEST:
            {
                return resultState.setIn([TYPE_COUNTRY, 'isFetching'], true)
                break
            }

        case COUNTRY_RESULT_SUCCESS:
            {
                let _resultState = resultState.setIn([TYPE_COUNTRY, 'data'], Immutable.Map(action.payload.data))
                let __resultState = _resultState.setIn(['updatedAt'], new Date())
                return __resultState.setIn([TYPE_COUNTRY, 'isFetching'], false)
                break
            }

        case INSTITUTION_RESULT_REQUEST:
            {
                return resultState.setIn([TYPE_INSTITUTION, 'isFetching'], true)
                break
            }

        case INSTITUTION_RESULT_SUCCESS:
            {
                let _resultState = resultState.setIn([TYPE_INSTITUTION, 'data'], Immutable.Map(action.payload.data))
                let __resultState = _resultState.setIn(['updatedAt'], new Date())
                return __resultState.setIn([TYPE_INSTITUTION, 'isFetching'], false)
                break
            }

        default:
            return resultState
    }
}
