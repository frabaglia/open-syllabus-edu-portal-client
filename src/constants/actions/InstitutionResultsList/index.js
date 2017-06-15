import {INSTITUTION_RESULTS_LIST_REQUEST,INSTITUTION_RESULTS_LIST_SUCCESS} from '../../action-types/InstitutionResultsList'
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
