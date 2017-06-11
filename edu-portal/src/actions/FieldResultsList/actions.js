import {
    TYPE_FIELD
} from '../../store/storeTypes'

const RESULTS_LIST = "RESULTS_LIST"
const FIELD_RESULTS_LIST = TYPE_FIELD + RESULTS_LIST
export const FIELD_RESULTS_LIST_REQUEST = FIELD_RESULTS_LIST + "REQUEST"
export const FIELD_RESULTS_LIST_SUCCESS = FIELD_RESULTS_LIST + "SUCCESS"

export const fieldResultsListRequest = () => {
    return {
        type: FIELD_RESULTS_LIST_REQUEST
    }
}

export const fieldResultsListSuccess = (data) => {
    return {
        type: FIELD_RESULTS_LIST_SUCCESS,
        payload: {
            data: data
        }
    }
}
