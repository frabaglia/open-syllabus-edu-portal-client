import {
  PUBLISHER_RESULTS_LIST_REQUEST,
  PUBLISHER_RESULTS_LIST_SUCCESS,
  PUBLISHER_RESULTS_LIST_ERROR
} from '../../action-types/PublisherResultsList'
import {
  API
} from '../../action-types/API'
import {
  SyllabusExplorerHTTPService
} from '../../../os-toolkit/SyllabusExplorerHTTPService'

export const publisherResultsListRequest = (params) => {
  return {
    type: API,
    payload: {
      request: SyllabusExplorerHTTPService.getPublisherResultsList(params),
      pending: PUBLISHER_RESULTS_LIST_REQUEST,
      success: PUBLISHER_RESULTS_LIST_SUCCESS,
      error: PUBLISHER_RESULTS_LIST_ERROR
    }
  }
}
