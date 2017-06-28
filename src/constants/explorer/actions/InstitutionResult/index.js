import {
  INSTITUTION_RESULT_REQUEST,
  INSTITUTION_RESULT_SUCCESS,
  INSTITUTION_RESULT_ERROR
} from '../../action-types/InstitutionResult'
import {
  API
} from '../../action-types/API'
import {
  SyllabusExplorerHTTPService
} from '../../../os-toolkit/SyllabusExplorerHTTPService'

export const institutionResultRequest = (id) => {
  return {
    type: API,
    payload: {
      request: SyllabusExplorerHTTPService.getInstitutionResult(id),
      pending: INSTITUTION_RESULT_REQUEST,
      success: INSTITUTION_RESULT_SUCCESS,
      error: INSTITUTION_RESULT_ERROR
    }
  }
}
