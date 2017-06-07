import {
    TYPE_PUBLISHER
} from '../../store/storeTypes'

const RESULTS_LIST = "RESULTS_LIST"
const PUBLISHER_RESULTS_LIST = TYPE_PUBLISHER + RESULTS_LIST
export const PUBLISHER_RESULTS_LIST_REQUEST = PUBLISHER_RESULTS_LIST + "REQUEST"
export const PUBLISHER_RESULTS_LIST_SUCCESS = PUBLISHER_RESULTS_LIST + "SUCCESS"

export const publisherResultsListRequest = () => {
    return {
        type: PUBLISHER_RESULTS_LIST_REQUEST
    }
}

export const publisherResultsListSuccess = (data) => {
    return {
        type: PUBLISHER_RESULTS_LIST_SUCCESS,
        payload: {
            data: data
        }
    }
}
