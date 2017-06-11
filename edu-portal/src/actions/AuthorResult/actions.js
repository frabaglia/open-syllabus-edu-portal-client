import {
    TYPE_AUTHOR
} from '../../store/storeTypes'

const RESULT = "RESULT"
const AUTHOR_RESULT = TYPE_AUTHOR + RESULT
export const AUTHOR_RESULT_REQUEST = AUTHOR_RESULT + "REQUEST"
export const AUTHOR_RESULT_SUCCESS = AUTHOR_RESULT + "SUCCESS"

export const authorResultRequest = () => {
    return {
        type: AUTHOR_RESULT_REQUEST
    }
}

export const authorResultSuccess = (data) => {
    return {
        type: AUTHOR_RESULT_SUCCESS,
        payload: {
            data: data
        }
    }
}
