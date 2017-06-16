import {
  PUBLISHER_RESULT_REQUEST,
  PUBLISHER_RESULT_SUCCESS
} from '../../action-types/PublisherResult'

export const publisherResultRequest = () => {
  return {
    type: PUBLISHER_RESULT_REQUEST
  }
}

export const publisherResultSuccess = (data) => {
  return {
    type: PUBLISHER_RESULT_SUCCESS,
    payload: {
      data: data
    }
  }
}
