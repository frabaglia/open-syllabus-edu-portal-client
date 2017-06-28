import {
  FULL_TEXT_RESULTS_LIST_REQUEST,
  FULL_TEXT_RESULTS_LIST_SUCCESS,
  FULL_TEXT_RESULTS_LIST_ERROR
} from '../../action-types/FullTextResultsList'
import {
  API
} from '../../action-types/API'
import {
  SyllabusEduPortalHTTPService
} from '../../../os-toolkit/SyllabusEduPortalHTTPService'

export const fullTextResultsListRequest = (params) => {
  return {
    type: API,
    payload: {
      request: SyllabusEduPortalHTTPService.getFullTextResultsList(params),
      pending: FULL_TEXT_RESULTS_LIST_REQUEST,
      success: FULL_TEXT_RESULTS_LIST_SUCCESS,
      error: FULL_TEXT_RESULTS_LIST_ERROR
    }
  }
}
