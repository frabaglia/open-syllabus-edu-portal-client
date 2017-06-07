import {
    TYPE_TITLE,
    TYPE_AUTHOR,
    TYPE_INSTITUTION,
    TYPE_FIELD,
    TYPE_COUNTRY,
    TYPE_PUBLISHER,
    TYPE_INSTITUTION_FIELD
} from '../../store/storeTypes'

const RESULTS_LIST_ERROR = 'RESULTS_LIST_ERROR'

export const resultsListError = (error) => {
    return {
        type: RESULTS_LIST_ERROR,
        payload: error
    }
}
