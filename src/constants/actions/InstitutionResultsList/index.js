import {
  INSTITUTION_RESULTS_LIST_REQUEST,
  INSTITUTION_RESULTS_LIST_SUCCESS,
  INSTITUTION_RESULTS_LIST_ERROR
} from '../../action-types/InstitutionResultsList'
import {
  API
} from '../../action-types/API'
import {
  SyllabusHTTPService
} from '../../../os-toolkit/SyllabusHTTPService'

export const institutionResultsListRequest = (params) => {
  return {
    type: API,
    payload: {
      request: SyllabusHTTPService.getInstitutionResultsList(params),
      pending: INSTITUTION_RESULTS_LIST_REQUEST,
      success: INSTITUTION_RESULTS_LIST_SUCCESS,
      error: INSTITUTION_RESULTS_LIST_ERROR
    }
  }
}
