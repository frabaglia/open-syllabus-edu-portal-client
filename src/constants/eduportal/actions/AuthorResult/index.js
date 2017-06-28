import {
  AUTHOR_RESULT_REQUEST,
  AUTHOR_RESULT_SUCCESS,
  AUTHOR_RESULT_ERROR
} from '../../action-types/AuthorResult'
import {
  API
} from '../../action-types/API'
import {
  SyllabusEduPortalHTTPService
} from '../../../os-toolkit/SyllabusEduPortalHTTPService'

export const authorResultRequest = (id) => {
  return {
    type: API,
    payload: {
      request: SyllabusEduPortalHTTPService.getAuthorResult(id),
      pending: AUTHOR_RESULT_REQUEST,
      success: AUTHOR_RESULT_SUCCESS,
      error: AUTHOR_RESULT_ERROR
    }
  }
}
