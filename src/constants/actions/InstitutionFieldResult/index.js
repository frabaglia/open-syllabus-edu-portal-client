import {
  INSTITUTION_FIELD_RESULT_REQUEST,
  INSTITUTION_FIELD_RESULT_SUCCESS,
  INSTITUTION_FIELD_RESULT_ERROR
} from '../../action-types/InstitutionFieldResult'
import {
  API
} from '../../action-types/API'
import {
  SyllabusHTTPService
} from '../../../os-toolkit/SyllabusHTTPService'

export const institutionFieldResultRequest = (id) => {
  return {
    type: API,
    payload: {
      request: SyllabusHTTPService.getInstitutionFieldResult(id),
      pending: INSTITUTION_FIELD_RESULT_REQUEST,
      success: INSTITUTION_FIELD_RESULT_SUCCESS,
      error: INSTITUTION_FIELD_RESULT_ERROR
    }
  }
}
