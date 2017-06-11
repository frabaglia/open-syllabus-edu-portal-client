import {
    TYPE_COUNTRY_FIELD
} from '../../store/storeTypes'

const RESULT = "RESULT"
const COUNTRY_FIELD_RESULT = TYPE_COUNTRY_FIELD + RESULT
export const COUNTRY_FIELD_RESULT_REQUEST = COUNTRY_FIELD_RESULT + "REQUEST"
export const COUNTRY_FIELD_RESULT_SUCCESS = COUNTRY_FIELD_RESULT + "SUCCESS"

export const countryFieldResultRequest = () => {
    return {
        type: COUNTRY_FIELD_RESULT_REQUEST
    }
}

export const countryFieldResultSuccess = (data) => {
    return {
        type: COUNTRY_FIELD_RESULT_SUCCESS,
        payload: {
            data: data
        }
    }
}
