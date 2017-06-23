import {
  FIELD_RESULTS_LIST_REQUEST,
  FIELD_RESULTS_LIST_SUCCESS,
  FIELD_RESULTS_LIST_ERROR
} from '../../action-types/FieldResultsList'
import {
  API
} from '../../action-types/API'
import {
  SyllabusHTTPService
} from '../../../os-toolkit/SyllabusHTTPService'

export const fieldResultsListRequest = (params) => {
  return {
    type: API,
    payload: {
      request: SyllabusHTTPService.getFieldResultsList(params),
      pending: FIELD_RESULTS_LIST_REQUEST,
      success: FIELD_RESULTS_LIST_SUCCESS,
      error: FIELD_RESULTS_LIST_ERROR
    }
  }
}
