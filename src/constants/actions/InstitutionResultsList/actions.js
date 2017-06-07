import {
    TYPE_INSTITUTION
} from '../../action-types/store'

const RESULTS_LIST = "RESULTS_LIST"
const INSTITUTION_RESULTS_LIST = TYPE_INSTITUTION + RESULTS_LIST
export const INSTITUTION_RESULTS_LIST_REQUEST = INSTITUTION_RESULTS_LIST + "REQUEST"
export const INSTITUTION_RESULTS_LIST_SUCCESS = INSTITUTION_RESULTS_LIST + "SUCCESS"

export const institutionResultsListRequest = () => {
    return {
        type: INSTITUTION_RESULTS_LIST_REQUEST
    }
}

export const institutionResultsListSuccess = (data) => {
    return {
        type: INSTITUTION_RESULTS_LIST_SUCCESS,
        payload: {
            data: data
        }
    }
}
