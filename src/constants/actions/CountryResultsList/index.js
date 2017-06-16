import {
  COUNTRY_RESULTS_LIST_REQUEST,
  COUNTRY_RESULTS_LIST_SUCCESS
} from '../../action-types/CountryResultsList'
export const countryResultsListRequest = () => {
  return {
    type: COUNTRY_RESULTS_LIST_REQUEST
  }
}

export const countryResultsListSuccess = (data) => {
  return {
    type: COUNTRY_RESULTS_LIST_SUCCESS,
    payload: {
      data: data
    }
  }
}
