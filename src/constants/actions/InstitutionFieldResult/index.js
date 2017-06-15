import {
  INSTITUTION_FIELD_RESULT_REQUEST,
  INSTITUTION_FIELD_RESULT_SUCCESS
} from '../../action-types/InstitutionFieldResult'

export const institutionFieldResultRequest = () => {
  return {
    type: INSTITUTION_FIELD_RESULT_REQUEST
  }
}

export const institutionFieldResultSuccess = (data) => {
  return {
    type: INSTITUTION_FIELD_RESULT_SUCCESS,
    payload: {
      data: data
    }
  }
}
