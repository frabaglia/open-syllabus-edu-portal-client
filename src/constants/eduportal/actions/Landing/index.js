import {
  API
} from '../../action-types/API'
import {
  syllabusEduPortalHTTPService
} from '../../../../os-toolkit/SyllabusEduPortalHTTPService'
import {
  ERROR
} from '../../action-types/GlobalMessages'

import {
  LANDING_UNIVERSITY_REQUEST,
  LANDING_UNIVERSITY_SUCCESS,
  LANDING_UNIVERSITY_FIELD_REQUEST,
  LANDING_UNIVERSITY_FIELD_SUCCESS,
  LANDING_UNIVERSITY_FIELD_YEAR_REQUEST,
  LANDING_UNIVERSITY_FIELD_YEAR_SUCCESS
} from '../../action-types/Landing'


export const landingUniversityRequest = (params) => {
  return {
    type: API,
    payload: {
      request: syllabusEduPortalHTTPService.getLandingUniversity(params),
      pending: LANDING_UNIVERSITY_REQUEST,
      success: LANDING_UNIVERSITY_SUCCESS,
      error: ERROR
    }
  }
}
export const landingUniversityFieldRequest = (params) => {
  return {
    type: API,
    payload: {
      request: syllabusEduPortalHTTPService.getLandingUniversityField(params),
      pending: LANDING_UNIVERSITY_FIELD_REQUEST,
      success: LANDING_UNIVERSITY_FIELD_SUCCESS,
      error: ERROR
    }
  }
}
export const landingUniversityFieldYearRequest = (params) => {
  return {
    type: API,
    payload: {
      request: syllabusEduPortalHTTPService.getLandingUniversityFieldYear(params),
      pending: LANDING_UNIVERSITY_FIELD_YEAR_REQUEST,
      success: LANDING_UNIVERSITY_FIELD_YEAR_SUCCESS,
      error: ERROR
    }
  }
}

/* DATA FETCHING */
