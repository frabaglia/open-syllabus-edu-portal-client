import {
  COUNTRY_RESULTS_LIST_REQUEST,
  COUNTRY_RESULTS_LIST_SUCCESS,
  COUNTRY_RESULTS_LIST_ERROR
} from '../../action-types/CountryResultsList'
import {
  API
} from '../../action-types/API'
import {
  SyllabusHTTPService
} from '../../../os-toolkit/SyllabusHTTPService'

export const countryResultsListRequest = (params) => {
  return {
    type: API,
    payload: {
      request: SyllabusHTTPService.getCountryResultsList(params),
      pending: COUNTRY_RESULTS_LIST_REQUEST,
      success: COUNTRY_RESULTS_LIST_SUCCESS,
      error: COUNTRY_RESULTS_LIST_ERROR
    }
  }
}
