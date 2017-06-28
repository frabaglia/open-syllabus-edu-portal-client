import {
  INSTITUTION_RESULTS_LIST_REQUEST,
  INSTITUTION_RESULTS_LIST_SUCCESS,
  INSTITUTION_RESULTS_LIST_ERROR
} from '../../action-types/InstitutionResultsList'
import {
  API
} from '../../action-types/API'
import {
  SyllabusExplorerHTTPService
} from '../../../os-toolkit/SyllabusExplorerHTTPService'

export const institutionResultsListRequest = (params) => {
  return {
    type: API,
    payload: {
      request: SyllabusExplorerHTTPService.getInstitutionResultsList(params),
      pending: INSTITUTION_RESULTS_LIST_REQUEST,
      success: INSTITUTION_RESULTS_LIST_SUCCESS,
      error: INSTITUTION_RESULTS_LIST_ERROR
    }
  }
}
