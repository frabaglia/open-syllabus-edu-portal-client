import {
  COUNTRY_RESULT_REQUEST,
  COUNTRY_RESULT_SUCCESS,
  COUNTRY_RESULT_ERROR
} from '../../action-types/CountryResult'
import {
  API
} from '../../action-types/API'
import {
  SyllabusHTTPService
} from '../../../os-toolkit/SyllabusHTTPService'

export const countryResultRequest = (id) => {
  return {
    type: API,
    payload: {
      request: SyllabusHTTPService.getCountryResult(id),
      pending: COUNTRY_RESULT_REQUEST,
      success: COUNTRY_RESULT_SUCCESS,
      error: COUNTRY_RESULT_ERROR
    }
  }
}
