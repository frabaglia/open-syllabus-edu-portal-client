import {
    TYPE_COUNTRY
} from '../../action-types/store'

const RESULTS_LIST = "RESULTS_LIST"
const COUNTRY_RESULTS_LIST = TYPE_COUNTRY + RESULTS_LIST
export const COUNTRY_RESULTS_LIST_REQUEST = COUNTRY_RESULTS_LIST + "REQUEST"
export const COUNTRY_RESULTS_LIST_SUCCESS = COUNTRY_RESULTS_LIST + "SUCCESS"

export const countryResultsListRequest = () => {
    return {
        type: COUNTRY_RESULTS_LIST_REQUEST
    }
}

export const countryResultsListSuccess = (data) => {
    return {
        type: COUNTRY_RESULTS_LIST_SUCCESS,
        payload: {
            data: data
        }
    }
}
