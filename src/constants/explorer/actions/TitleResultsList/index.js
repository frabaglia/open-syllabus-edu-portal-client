import {
  TITLE_RESULTS_LIST_REQUEST,
  TITLE_RESULTS_LIST_SUCCESS,
  TITLE_RESULTS_LIST_ERROR
} from '../../action-types/TitleResultsList'
import {
  API
} from '../../action-types/API'
import {
  SyllabusHTTPService
} from '../../../os-toolkit/SyllabusHTTPService'

export const titleResultsListRequest = (params) => {
  return {
    type: API,
    payload: {
      request: SyllabusHTTPService.getTitleResultsList(params),
      pending: TITLE_RESULTS_LIST_REQUEST,
      success: TITLE_RESULTS_LIST_SUCCESS,
      error: TITLE_RESULTS_LIST_ERROR
    }
  }
}
