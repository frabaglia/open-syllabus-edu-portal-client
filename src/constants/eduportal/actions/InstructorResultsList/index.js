import {
  INSTRUCTOR_RESULTS_LIST_REQUEST,
  INSTRUCTOR_RESULTS_LIST_SUCCESS,
  INSTRUCTOR_RESULTS_LIST_ERROR
} from '../../action-types/InstructorResultsList'
import {
  API
} from '../../action-types/API'
import {
  syllabusEduPortalHTTPService
} from '../../../../os-toolkit/SyllabusEduPortalHTTPService'

export const instructorResultsListRequest = (params) => {
  return {
    type: API,
    payload: {
      request: syllabusEduPortalHTTPService.getInstructorResultsList(params),
      pending: INSTRUCTOR_RESULTS_LIST_REQUEST,
      success: INSTRUCTOR_RESULTS_LIST_SUCCESS,
      error: INSTRUCTOR_RESULTS_LIST_ERROR
    }
  }
}
