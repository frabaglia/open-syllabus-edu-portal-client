import {
  COUNTRY_RESULT_REQUEST,
  COUNTRY_RESULT_SUCCESS
} from '../../action-types/AuthorResult'
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
