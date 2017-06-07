import {
    TYPE_TITLE
} from '../../action-types/store'

const RESULT = "RESULT"
const TITLE_RESULT = TYPE_TITLE + RESULT
export const TITLE_RESULT_REQUEST = TITLE_RESULT + "REQUEST"
export const TITLE_RESULT_SUCCESS = TITLE_RESULT + "SUCCESS"

export const titleResultRequest = () => {
    return {
        type: TITLE_RESULT_REQUEST
    }
}

export const titleResultSuccess = (data) => {
    return {
        type: TITLE_RESULT_SUCCESS,
        payload: {
            data: data
        }
    }
}
