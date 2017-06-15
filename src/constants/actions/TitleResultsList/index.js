import {
  TITLE_RESULTS_LIST_REQUEST,
  TITLE_RESULTS_LIST_SUCCESS
} from '../../action-types/TitleResultsList'
export const titleResultsListRequest = () => {
  return {
    type: TITLE_RESULTS_LIST_REQUEST
  }
}

export const titleResultsListSuccess = (data) => {
  return {
    type: TITLE_RESULTS_LIST_SUCCESS,
    payload: {
      data: data
    }
  }
}
