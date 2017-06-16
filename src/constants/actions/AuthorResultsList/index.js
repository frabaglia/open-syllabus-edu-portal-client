import {
  AUTHOR_RESULTS_LIST_REQUEST,
  AUTHOR_RESULTS_LIST_SUCCESS
} from '../../action-types/AuthorResultsList'
export const authorResultsListRequest = () => {
  return {
    type: AUTHOR_RESULTS_LIST_REQUEST
  }
}

export const authorResultsListSuccess = (data) => {
  return {
    type: AUTHOR_RESULTS_LIST_SUCCESS,
    payload: {
      data: data
    }
  }
}
