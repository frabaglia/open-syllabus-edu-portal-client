import {
    TYPE_TITLE
} from '../../store/storeTypes'

const RESULTS_LIST = "RESULTS_LIST"
const TITLE_RESULTS_LIST = TYPE_TITLE + RESULTS_LIST
export const TITLE_RESULTS_LIST_REQUEST = TITLE_RESULTS_LIST + "REQUEST"
export const TITLE_RESULTS_LIST_SUCCESS = TITLE_RESULTS_LIST + "SUCCESS"

export const titleResultsListRequest = () => {
    return {
        type: TITLE_RESULTS_LIST_REQUEST
    }
}

export const titleResultsListSuccess = (data) => {
    return {
        type: TITLE_RESULTS_LIST_SUCCESS,
        payload: {
            data: data
        }
    }
}
