import {
  FIELD_RESULTS_LIST_REQUEST,
  FIELD_RESULTS_LIST_SUCCESS
} from '../../action-types/FieldResultsList'
export const fieldResultsListRequest = () => {
  return {
    type: FIELD_RESULTS_LIST_REQUEST
  }
}

export const fieldResultsListSuccess = (data) => {
  return {
    type: FIELD_RESULTS_LIST_SUCCESS,
    payload: {
      data: data
    }
  }
}
