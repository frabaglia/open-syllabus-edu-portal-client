import {
  FIELD_RESULT_REQUEST,
  FIELD_RESULT_SUCCESS,
  FIELD_RESULT_ERROR
} from '../../action-types/FieldResult'
import {
  API
} from '../../action-types/API'
import {
  SyllabusHTTPService
} from '../../../os-toolkit/SyllabusHTTPService'

export const fieldResultRequest = (id) => {
  return {
    type: API,
    payload: {
      request: SyllabusHTTPService.getFieldResult(id),
      pending: FIELD_RESULT_REQUEST,
      success: FIELD_RESULT_SUCCESS,
      error: FIELD_RESULT_ERROR
    }
  }
}
