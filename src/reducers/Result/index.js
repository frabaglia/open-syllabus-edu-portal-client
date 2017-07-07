import Immutable from 'immutable';

import {
    TYPE_TITLE,
    TYPE_AUTHOR,
} from '../../constants/eduportal/store-types'

import {
    TITLE_RESULT_REQUEST,
    TITLE_RESULT_SUCCESS
} from '../../constants/eduportal/action-types/TitleResult'

import {
    AUTHOR_RESULT_REQUEST,
    AUTHOR_RESULT_SUCCESS
} from '../../constants/eduportal/action-types/AuthorResult'

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

        default:
            return resultState
    }
}
