import {
  INSTITUTION_RESULT_REQUEST,
  INSTITUTION_RESULT_SUCCESS
} from '../../action-types/InstitutionResult'
export const institutionResultRequest = () => {
  return {
    type: INSTITUTION_RESULT_REQUEST
  }
}

export const institutionResultSuccess = (data) => {
  return {
    type: INSTITUTION_RESULT_SUCCESS,
    payload: {
      data: data
    }
  }
}
