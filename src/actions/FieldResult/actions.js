import {
    TYPE_FIELD
} from '../../store/storeTypes'

const RESULT = "RESULT"
const FIELD_RESULT = TYPE_FIELD + RESULT
export const FIELD_RESULT_REQUEST = FIELD_RESULT + "REQUEST"
export const FIELD_RESULT_SUCCESS = FIELD_RESULT + "SUCCESS"

export const fieldResultRequest = () => {
    return {
        type: FIELD_RESULT_REQUEST
    }
}

export const fieldResultSuccess = (data) => {
    return {
        type: FIELD_RESULT_SUCCESS,
        payload: {
            data: data
        }
    }
}
