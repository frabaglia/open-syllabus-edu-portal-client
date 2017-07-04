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
  LANDING_UNIVERSITY_FIELD_YEAR_SUCCESS,
  LANDING_UNIVERSITY_SELECTED_YEAR,
  LANDING_UNIVERSITY_FIELD_SHOW_ALL,
  LANDING_UNIVERSITY_FIELD_SHOW_OWN,
  LANDING_UNIVERSITY_FIELD_SELECTED_YEAR,
  LANDING_UNIVERSITY_FIELD_YEAR_SELECTED_TEXT
} from '../../action-types/Landing'

/* UI */

export const landingUniversitySelectedYear = (selectedYear) => {
  return {
    type: LANDING_UNIVERSITY_SELECTED_YEAR,
    payload: selectedYear
  }
}
export const landingUniversityFieldShowAll = () => {
  return {
    type: LANDING_UNIVERSITY_FIELD_SHOW_ALL
  }
}
export const landingUniversityFieldShowOwn = () => {
  return {
    type: LANDING_UNIVERSITY_FIELD_SHOW_OWN
  }
}
export const landingUniversityFieldSelectedYear = (selectedYear) => {
  return {
    type: LANDING_UNIVERSITY_FIELD_SELECTED_YEAR,
    payload: selectedYear
  }
}
export const landingUniversityFieldYearSelectedText = (selectedText) => {
  return {
    type: LANDING_UNIVERSITY_FIELD_YEAR_SELECTED_TEXT,
    payload: selectedText
  }
}
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
