import {
  API
} from '../../action-types/API'
import {
  syllabusEduPortalHTTPService
} from '../../../../os-toolkit/SyllabusEduPortalHTTPService'
import {
  ERROR
} from '../../action-types/Global'

import {
  LANDING_UNIVERSITY_REQUEST,
  LANDING_UNIVERSITY_ERROR,
  LANDING_UNIVERSITY_SUCCESS,
  LANDING_UNIVERSITY_FIELD_REQUEST,
  LANDING_UNIVERSITY_FIELD_ERROR,
  LANDING_UNIVERSITY_FIELD_SUCCESS,
  LANDING_UNIVERSITY_FIELD_YEAR_REQUEST,
  LANDING_UNIVERSITY_FIELD_YEAR_ERROR,
  LANDING_UNIVERSITY_FIELD_YEAR_SUCCESS
} from '../../action-types/Landing'


export const landingUniversityRequest = (params) => {
  return {
    type: API,
    payload: {
      request: syllabusEduPortalHTTPService.getLandingUniversity(params),
      pending: LANDING_UNIVERSITY_REQUEST,
      success: LANDING_UNIVERSITY_SUCCESS,
      error: LANDING_UNIVERSITY_ERROR
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
      error: LANDING_UNIVERSITY_FIELD_ERROR
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
      error: LANDING_UNIVERSITY_FIELD_YEAR_ERROR
    }
  }
}

/* DATA FETCHING */
