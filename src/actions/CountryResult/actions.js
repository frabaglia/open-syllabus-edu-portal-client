import {
    TYPE_COUNTRY
} from '../../store/storeTypes'

const RESULT = "RESULT"
const COUNTRY_RESULT = TYPE_COUNTRY + RESULT
export const COUNTRY_RESULT_REQUEST = COUNTRY_RESULT + "REQUEST"
export const COUNTRY_RESULT_SUCCESS = COUNTRY_RESULT + "SUCCESS"

export const countryResultRequest = () => {
    return {
        type: COUNTRY_RESULT_REQUEST
    }
}

export const countryResultSuccess = (data) => {
    return {
        type: COUNTRY_RESULT_SUCCESS,
        payload: {
            data: data
        }
    }
}
