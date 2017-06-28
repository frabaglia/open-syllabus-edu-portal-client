import {
  TITLE_RESULTS_LIST_REQUEST,
  TITLE_RESULTS_LIST_SUCCESS,
  TITLE_RESULTS_LIST_ERROR
} from '../../action-types/TitleResultsList'
import {
  API
} from '../../action-types/API'
import {
  SyllabusExplorerHTTPService
} from '../../../os-toolkit/SyllabusExplorerHTTPService'

export const titleResultsListRequest = (params) => {
  return {
    type: API,
    payload: {
      request: SyllabusExplorerHTTPService.getTitleResultsList(params),
      pending: TITLE_RESULTS_LIST_REQUEST,
      success: TITLE_RESULTS_LIST_SUCCESS,
      error: TITLE_RESULTS_LIST_ERROR
    }
  }
}
