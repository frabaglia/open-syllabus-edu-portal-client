import {
    TYPE_PUBLISHER
} from '../../action-types/store'

const RESULT = "RESULT"
const PUBLISHER_RESULT = TYPE_PUBLISHER + RESULT
export const PUBLISHER_RESULT_REQUEST = PUBLISHER_RESULT + "REQUEST"
export const PUBLISHER_RESULT_SUCCESS = PUBLISHER_RESULT + "SUCCESS"

export const publisherResultRequest = () => {
    return {
        type: PUBLISHER_RESULT_REQUEST
    }
}

export const publisherResultSuccess = (data) => {
    return {
        type: PUBLISHER_RESULT_SUCCESS,
        payload: {
            data: data
        }
    }
}
