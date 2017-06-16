import {
  FIELD_RESULT_REQUEST,
  FIELD_RESULT_SUCCESS
} from '../../action-types/FieldResult'
export const fieldResultRequest = () => {
  return {
    type: FIELD_RESULT_REQUEST
  }
}

export const fieldResultSuccess = (data) => {
  return {
    type: FIELD_RESULT_SUCCESS,
    payload: {
      data: data
    }
  }
}
