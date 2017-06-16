import {
    List,
    Map,
} from 'immutable';

import {
    TYPE_TITLE,
    TYPE_AUTHOR,
    TYPE_INSTITUTION,
    TYPE_FIELD,
    TYPE_COUNTRY,
    TYPE_PUBLISHER,
    TYPE_INSTITUTION_FIELD

} from '../../store/storeTypes'

import {
    MOST_FRECUENT_TYPE_UPDATE,
    MOST_FRECUENT_TITLE_REQUEST,
    MOST_FRECUENT_FIELD_REQUEST,
    MOST_FRECUENT_AUTHOR_REQUEST,
    MOST_FRECUENT_INSTITUTION_REQUEST,
    MOST_FRECUENT_COUNTRY_REQUEST,
    MOST_FRECUENT_PUBLISHER_REQUEST,
    MOST_FRECUENT_TITLE_FAILURE,
    MOST_FRECUENT_FIELD_FAILURE,
    MOST_FRECUENT_AUTHOR_FAILURE,
    MOST_FRECUENT_INSTITUTION_FAILURE,
    MOST_FRECUENT_COUNTRY_FAILURE,
    MOST_FRECUENT_PUBLISHER_FAILURE,
    MOST_FRECUENT_TITLE_SUCCESS,
    MOST_FRECUENT_FIELD_SUCCESS,
    MOST_FRECUENT_AUTHOR_SUCCESS,
    MOST_FRECUENT_INSTITUTION_SUCCESS,
    MOST_FRECUENT_COUNTRY_SUCCESS,
    MOST_FRECUENT_PUBLISHER_SUCCESS
} from '../../constants/actions/Landing'

import {
    isStoredDataUpToDate
} from '../../os-toolkit/Date/component'

const mostFrecuent = Map({
    current: TYPE_TITLE,
    TYPE_TITLE: Map({
        isFetching: false,
        data: new List(),
        updatedAt: false
    }),
    TYPE_AUTHOR: Map({
        isFetching: false,
        data: new List(),
        updatedAt: false
    }),
    TYPE_INSTITUTION: Map({
        isFetching: false,
        data: new List(),
        updatedAt: false
    }),
    TYPE_FIELD: Map({
        isFetching: false,
        data: new List(),
        updatedAt: false
    }),
    TYPE_COUNTRY: Map({
        isFetching: false,
        data: new List(),
        updatedAt: false
    }),
    TYPE_PUBLISHER: Map({
        isFetching: false,
        data: new List(),
        updatedAt: false
    }),
    updatedAt: false
})

const locationList = Map({
    isFetching: false,
    data: new List(),
    updatedAt: false
})

const fieldChart = Map({
    isFetching: false,
    data: new List(),
    updatedAt: false
})

const initialLandingState = Map({
    mostFrecuent,
    locationList,
    fieldChart,
    updatedAt: false
})

export default function landing(landingState = initialLandingState, action) {

    switch (action.type) {
        case MOST_FRECUENT_TYPE_UPDATE:
            {
                let _landingState = landingState.setIn(['mostFrecuent', 'updatedAt'], new Date())
                return _landingState.setIn(['mostFrecuent', 'current'], action.payload)
                break
            }
        case MOST_FRECUENT_INSTITUTION_REQUEST:
            {
                return landingState.setIn(['mostFrecuent',TYPE_INSTITUTION, 'isFetching'], true)
                break
            }
        case MOST_FRECUENT_TITLE_REQUEST:
            {
                return landingState.setIn(['mostFrecuent',TYPE_TITLE, 'isFetching'], true)
                break
            }
        case MOST_FRECUENT_FIELD_REQUEST:
            {
                return landingState.setIn(['mostFrecuent',TYPE_FIELD, 'isFetching'], true)
                break
            }
        case MOST_FRECUENT_AUTHOR_REQUEST:
            {
                return landingState.setIn(['mostFrecuent',TYPE_AUTHOR, 'isFetching'], true)
                break
            }
        case MOST_FRECUENT_COUNTRY_REQUEST:
            {
                return landingState.setIn(['mostFrecuent',TYPE_COUNTRY, 'isFetching'], true)
                break
            }
        case MOST_FRECUENT_PUBLISHER_REQUEST:
            {
                return landingState.setIn(['mostFrecuent',TYPE_PUBLISHER, 'isFetching'], true)
                break
            }
        case MOST_FRECUENT_TITLE_SUCCESS:
            {
                let _landingState = landingState.setIn(['mostFrecuent',TYPE_TITLE, 'data'], new List(action.payload.data))
                let __landingState = _landingState.setIn(['mostFrecuent',TYPE_TITLE,'updatedAt'], new Date())
                return __landingState.setIn(['mostFrecuent',TYPE_TITLE, 'isFetching'], false)
                break
            }
        case MOST_FRECUENT_FIELD_SUCCESS:
            {
                let _landingState = landingState.setIn(['mostFrecuent',TYPE_FIELD, 'data'], new List(action.payload.data))
                let __landingState = _landingState.setIn(['mostFrecuent',TYPE_FIELD,'updatedAt'], new Date())
                return __landingState.setIn(['mostFrecuent',TYPE_FIELD, 'isFetching'], false)
                break
            }
        case MOST_FRECUENT_AUTHOR_SUCCESS:
            {
                let _landingState = landingState.setIn(['mostFrecuent',TYPE_AUTHOR, 'data'], new List(action.payload.data))
                let __landingState = _landingState.setIn(['mostFrecuent',TYPE_AUTHOR,'updatedAt'], new Date())
                return __landingState.setIn(['mostFrecuent',TYPE_AUTHOR, 'isFetching'], false)
                break
            }
        case MOST_FRECUENT_INSTITUTION_SUCCESS:
            {
                let _landingState = landingState.setIn(['mostFrecuent',TYPE_INSTITUTION, 'data'], new List(action.payload.data))
                let __landingState = _landingState.setIn(['mostFrecuent',TYPE_INSTITUTION,'updatedAt'], new Date())
                return __landingState.setIn(['mostFrecuent',TYPE_INSTITUTION, 'isFetching'], false)
                break
            }
        case MOST_FRECUENT_COUNTRY_SUCCESS:
            {
                let _landingState = landingState.setIn(['mostFrecuent',TYPE_COUNTRY, 'data'], new List(action.payload.data))
                let __landingState = _landingState.setIn(['mostFrecuent',TYPE_COUNTRY,'updatedAt'], new Date())
                return __landingState.setIn(['mostFrecuent',TYPE_COUNTRY, 'isFetching'], false)
                break
            }
        case MOST_FRECUENT_PUBLISHER_SUCCESS:
            {
                let _landingState = landingState.setIn(['mostFrecuent',TYPE_PUBLISHER, 'data'], new List(action.payload.data))
                let __landingState = _landingState.setIn(['mostFrecuent',TYPE_PUBLISHER,'updatedAt'], new Date())
                return __landingState.setIn(['mostFrecuent',TYPE_PUBLISHER, 'isFetching'], false)
                break
            }
        default:
            return landingState
    }
}
