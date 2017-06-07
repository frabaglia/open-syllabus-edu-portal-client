import {
    TYPE_INSTITUTION
} from '../../action-types/store'

const RESULT = "RESULT"
const INSTITUTION_RESULT = TYPE_INSTITUTION + RESULT
export const INSTITUTION_RESULT_REQUEST = INSTITUTION_RESULT + "REQUEST"
export const INSTITUTION_RESULT_SUCCESS = INSTITUTION_RESULT + "SUCCESS"

export const institutionResultRequest = () => {
    return {
        type: INSTITUTION_RESULT_REQUEST
    }
}

export const institutionResultSuccess = (data) => {
    return {
        type: INSTITUTION_RESULT_SUCCESS,
        payload: {
            data: data
        }
    }
}
