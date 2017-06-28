import {
  PUBLISHER_RESULT_REQUEST,
  PUBLISHER_RESULT_SUCCESS,
  PUBLISHER_RESULT_ERROR
} from '../../action-types/PublisherResult'
import {
  API
} from '../../action-types/API'
import {
  SyllabusExplorerHTTPService
} from '../../../os-toolkit/SyllabusExplorerHTTPService'

export const publisherResultRequest = (id) => {
  return {
    type: API,
    payload: {
      request: SyllabusExplorerHTTPService.getPublisherResult(id),
      pending: PUBLISHER_RESULT_REQUEST,
      success: PUBLISHER_RESULT_SUCCESS,
      error: PUBLISHER_RESULT_ERROR
    }
  }
}
