import {
  TITLE_RESULT_REQUEST,
  TITLE_RESULT_SUCCESS
} from '../../action-types/TitleResult'

export const titleResultRequest = () => {
  return {
    type: TITLE_RESULT_REQUEST
  }
}

export const titleResultSuccess = (data) => {
  return {
    type: TITLE_RESULT_SUCCESS,
    payload: {
      data: data
    }
  }
}
