import {
  COUNTRY_RESULT_REQUEST,
  COUNTRY_RESULT_SUCCESS,
  COUNTRY_RESULT_ERROR
} from '../../action-types/CountryResult'
import {
  API
} from '../../action-types/API'
import {
  SyllabusExplorerHTTPService
} from '../../../os-toolkit/SyllabusExplorerHTTPService'

export const countryResultRequest = (id) => {
  return {
    type: API,
    payload: {
      request: SyllabusExplorerHTTPService.getCountryResult(id),
      pending: COUNTRY_RESULT_REQUEST,
      success: COUNTRY_RESULT_SUCCESS,
      error: COUNTRY_RESULT_ERROR
    }
  }
}
