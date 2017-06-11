import {
    TYPE_AUTHOR
} from '../../store/storeTypes'

const RESULTS_LIST = "RESULTS_LIST"
const AUTHOR_RESULTS_LIST = TYPE_AUTHOR + RESULTS_LIST
export const AUTHOR_RESULTS_LIST_REQUEST = AUTHOR_RESULTS_LIST + "REQUEST"
export const AUTHOR_RESULTS_LIST_SUCCESS = AUTHOR_RESULTS_LIST + "SUCCESS"

export const authorResultsListRequest = () => {
    return {
        type: AUTHOR_RESULTS_LIST_REQUEST
    }
}

export const authorResultsListSuccess = (data) => {
    return {
        type: AUTHOR_RESULTS_LIST_SUCCESS,
        payload: {
            data: data
        }
    }
}
