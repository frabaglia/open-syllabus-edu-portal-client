import {
  FIELD_RESULTS_LIST_REQUEST,
  FIELD_RESULTS_LIST_SUCCESS,
  FIELD_RESULTS_LIST_ERROR
} from '../../action-types/FieldResultsList'
import {
  API
} from '../../action-types/API'
import {
  SyllabusExplorerHTTPService
} from '../../../os-toolkit/SyllabusExplorerHTTPService'

export const fieldResultsListRequest = (params) => {
  return {
    type: API,
    payload: {
      request: SyllabusExplorerHTTPService.getFieldResultsList(params),
      pending: FIELD_RESULTS_LIST_REQUEST,
      success: FIELD_RESULTS_LIST_SUCCESS,
      error: FIELD_RESULTS_LIST_ERROR
    }
  }
}
