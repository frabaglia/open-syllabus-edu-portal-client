import {
  PUBLISHER_RESULTS_LIST_REQUEST,
  PUBLISHER_RESULTS_LIST_SUCCESS,
  PUBLISHER_RESULTS_LIST_ERROR
} from '../../action-types/PublisherResultsList'
import {
  API
} from '../../action-types/API'
import {
  SyllabusHTTPService
} from '../../../os-toolkit/SyllabusHTTPService'

export const publisherResultsListRequest = (params) => {
  return {
    type: API,
    payload: {
      request: SyllabusHTTPService.getPublisherResultsList(params),
      pending: PUBLISHER_RESULTS_LIST_REQUEST,
      success: PUBLISHER_RESULTS_LIST_SUCCESS,
      error: PUBLISHER_RESULTS_LIST_ERROR
    }
  }
}
