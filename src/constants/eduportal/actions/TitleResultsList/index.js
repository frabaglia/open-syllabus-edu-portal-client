import {
  TITLE_RESULTS_LIST_REQUEST,
  TITLE_RESULTS_LIST_SUCCESS,
  TITLE_RESULTS_LIST_ERROR
} from '../../action-types/TitleResultsList'
import {
  API
} from '../../action-types/API'
import {
  syllabusEduPortalHTTPService
} from '../../../../os-toolkit/SyllabusEduPortalHTTPService'

export const titleResultsListRequest = (params) => {
  return {
    type: API,
    payload: {
      request: syllabusEduPortalHTTPService.getTitleResultsList(params),
      pending: TITLE_RESULTS_LIST_REQUEST,
      success: TITLE_RESULTS_LIST_SUCCESS,
      error: TITLE_RESULTS_LIST_ERROR
    }
  }
}
