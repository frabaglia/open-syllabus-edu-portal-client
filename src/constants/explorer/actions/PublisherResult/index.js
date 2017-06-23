import {
  PUBLISHER_RESULT_REQUEST,
  PUBLISHER_RESULT_SUCCESS,
  PUBLISHER_RESULT_ERROR
} from '../../action-types/PublisherResult'
import {
  API
} from '../../action-types/API'
import {
  SyllabusHTTPService
} from '../../../os-toolkit/SyllabusHTTPService'

export const publisherResultRequest = (id) => {
  return {
    type: API,
    payload: {
      request: SyllabusHTTPService.getPublisherResult(id),
      pending: PUBLISHER_RESULT_REQUEST,
      success: PUBLISHER_RESULT_SUCCESS,
      error: PUBLISHER_RESULT_ERROR
    }
  }
}
