import {
  RESULTS_LIST_ERROR
} from '../../action-types/ResultsList'

export const resultsListError = (error) => {
  return {
    type: RESULTS_LIST_ERROR,
    payload: error
  }
}
