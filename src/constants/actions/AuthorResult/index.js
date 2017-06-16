import {
  AUTHOR_RESULT_REQUEST,
  AUTHOR_RESULT_SUCCESS
} from '../../action-types/AuthorResult'
import {
  ERROR
} from '../../action-types/GlobalMessages'
import {
  API
} from '../../action-types/API'
import {
  SyllabusHTTPService
} from '../../../os-toolkit/SyllabusHTTPService'

export const authorResultRequest = () => {
  return {
    type: API,
    payload: {
      request: 'recipes.json',
      pending: AUTHOR_RESULT_REQUEST,
      success: AUTHOR_RESULT_SUCCESS,
      error: ERROR
    }
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
