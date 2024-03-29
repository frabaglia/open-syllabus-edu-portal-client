import {
  TITLE_RESULT_REQUEST,
  TITLE_RESULT_SUCCESS,
  TITLE_RESULT_ERROR
} from '../../action-types/TitleResult'
import {
  API
} from '../../action-types/API'
import {
  syllabusEduPortalHTTPService
} from '../../../../os-toolkit/SyllabusEduPortalHTTPService'

export const titleResultRequest = (id) => {
  return {
    type: API,
    payload: {
      request: syllabusEduPortalHTTPService.getTitleResult(id),
      pending: TITLE_RESULT_REQUEST,
      success: TITLE_RESULT_SUCCESS,
      error: TITLE_RESULT_ERROR
    }
  }
}
