import {
  MOST_FRECUENT_TYPE_UPDATE,
  MOST_FRECUENT_TITLE_REQUEST,
  MOST_FRECUENT_TITLE_SUCCESS,
  MOST_FRECUENT_TITLE_ERROR,
  MOST_FRECUENT_AUTHOR_REQUEST,
  MOST_FRECUENT_AUTHOR_SUCCESS,
  MOST_FRECUENT_AUTHOR_ERROR,
  MOST_FRECUENT_FIELD_REQUEST,
  MOST_FRECUENT_FIELD_SUCCESS,
  MOST_FRECUENT_FIELD_ERROR,
  MOST_FRECUENT_INSTITUTION_REQUEST,
  MOST_FRECUENT_INSTITUTION_SUCCESS,
  MOST_FRECUENT_INSTITUTION_ERROR,
  MOST_FRECUENT_COUNTRY_REQUEST,
  MOST_FRECUENT_COUNTRY_SUCCESS,
  MOST_FRECUENT_COUNTRY_ERROR,
  MOST_FRECUENT_PUBLISHER_REQUEST,
  MOST_FRECUENT_PUBLISHER_SUCCESS,
  MOST_FRECUENT_PUBLISHER_ERROR
} from '../../action-types/Landing'
import {
  API
} from '../../action-types/API'
import {
  SyllabusHTTPService
} from '../../../os-toolkit/SyllabusHTTPService'

export const mostFrecuentTypeUpdate = (type) => {
  return {
    type: MOST_FRECUENT_TYPE_UPDATE,
    payload: type
  }
}

export const mostFrecuentTitleRequest = () => {
  return {
    type: API,
    payload: {
      request: SyllabusHTTPService.getMostFrecuentTitles(),
      pending: MOST_FRECUENT_TITLE_REQUEST,
      success: MOST_FRECUENT_TITLE_SUCCESS,
      error: MOST_FRECUENT_TITLE_ERROR
    }
  }
}

export const mostFrecuentAuthorRequest = () => {
  return {
    type: API,
    payload: {
      request: SyllabusHTTPService.getMostFrecuentAuthors(),
      pending: MOST_FRECUENT_AUTHOR_REQUEST,
      success: MOST_FRECUENT_AUTHOR_SUCCESS,
      error: MOST_FRECUENT_AUTHOR_ERROR
    }
  }
}

export const mostFrecuentFieldRequest = () => {
  return {
    type: API,
    payload: {
      request: SyllabusHTTPService.getMostFrecuentFields(),
      pending: MOST_FRECUENT_FIELD_REQUEST,
      success: MOST_FRECUENT_FIELD_SUCCESS,
      error: MOST_FRECUENT_FIELD_ERROR
    }
  }
}

export const mostFrecuentInstitutionRequest = () => {
  return {
    type: API,
    payload: {
      request: SyllabusHTTPService.getMostFrecuentInstitutions(),
      pending: MOST_FRECUENT_INSTITUTION_REQUEST,
      success: MOST_FRECUENT_INSTITUTION_SUCCESS,
      error: MOST_FRECUENT_INSTITUTION_ERROR
    }
  }
}

export const mostFrecuentCountryRequest = () => {
  return {
    type: API,
    payload: {
      request: SyllabusHTTPService.getMostFrecuentCountries(),
      pending: MOST_FRECUENT_COUNTRY_REQUEST,
      success: MOST_FRECUENT_COUNTRY_SUCCESS,
      error: MOST_FRECUENT_COUNTRY_ERROR
    }
  }
}

export const mostFrecuentPublisherRequest = () => {
  return {
    type: API,
    payload: {
      request: SyllabusHTTPService.getMostFrecuentPublishers(),
      pending: MOST_FRECUENT_PUBLISHER_REQUEST,
      success: MOST_FRECUENT_PUBLISHER_SUCCESS,
      error: MOST_FRECUENT_PUBLISHER_ERROR
    }
  }
}
