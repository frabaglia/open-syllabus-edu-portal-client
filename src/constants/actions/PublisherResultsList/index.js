import {
  PUBLISHER_RESULTS_LIST_REQUEST,
  PUBLISHER_RESULTS_LIST_SUCCESS
} from '../../action-types/PublisherResultsList'
export const publisherResultsListRequest = () => {
  return {
    type: PUBLISHER_RESULTS_LIST_REQUEST
  }
}

export const publisherResultsListSuccess = (data) => {
  return {
    type: PUBLISHER_RESULTS_LIST_SUCCESS,
    payload: {
      data: data
    }
  }
}
