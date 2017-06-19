import {
  AUTHOR_RESULTS_LIST_REQUEST,
  AUTHOR_RESULTS_LIST_SUCCESS,
  AUTHOR_RESULTS_LIST_ERROR
} from '../../action-types/AuthorResultsList'
import {
  API
} from '../../action-types/API'
import {
  SyllabusHTTPService
} from '../../../os-toolkit/SyllabusHTTPService'

export const authorResultsListRequest = (params) => {
  return {
    type: API,
    payload: {
      request: SyllabusHTTPService.getAuthorResultsList(params),
      pending: AUTHOR_RESULTS_LIST_REQUEST,
      success: AUTHOR_RESULTS_LIST_SUCCESS,
      error: AUTHOR_RESULTS_LIST_ERROR
    }
  }
}
