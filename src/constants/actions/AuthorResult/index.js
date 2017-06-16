import {
  AUTHOR_RESULT_REQUEST,
  AUTHOR_RESULT_SUCCESS
} from '../../action-types/AuthorResult'
export const authorResultRequest = () => {
  return {
    type: AUTHOR_RESULT_REQUEST
  }
}

export const authorResultSuccess = (data) => {
  return {
    type: AUTHOR_RESULT_SUCCESS,
    payload: {
      data: data
    }
  }
}
