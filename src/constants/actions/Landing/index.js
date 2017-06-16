import {
  MOST_FRECUENT_TYPE_UPDATE,
  MOST_FRECUENT_TITLE_REQUEST,
  MOST_FRECUENT_TITLE_SUCCESS,
  MOST_FRECUENT_AUTHOR_REQUEST,
  MOST_FRECUENT_AUTHOR_SUCCESS,
  MOST_FRECUENT_FIELD_REQUEST,
  MOST_FRECUENT_FIELD_SUCCESS,
  MOST_FRECUENT_INSTITUTION_REQUEST,
  MOST_FRECUENT_INSTITUTION_SUCCESS,
  MOST_FRECUENT_COUNTRY_REQUEST,
  MOST_FRECUENT_COUNTRY_SUCCESS,
  MOST_FRECUENT_PUBLISHER_REQUEST,
  MOST_FRECUENT_PUBLISHER_SUCCESS
} from '../../action-types/Landing'

export const mostFrecuentTypeUpdate = (type) => {
  return {
    type: MOST_FRECUENT_TYPE_UPDATE,
    payload: type
  }
}

export const mostFrecuentTitleRequest = () => {
  return {
    type: MOST_FRECUENT_TITLE_REQUEST
  }
}

export const mostFrecuentTitleSuccess = (data) => {
  return {
    type: MOST_FRECUENT_TITLE_SUCCESS,
    payload: {
      data: data
    }
  }
}

export const mostFrecuentAuthorRequest = () => {
  return {
    type: MOST_FRECUENT_AUTHOR_REQUEST
  }
}

export const mostFrecuentAuthorSuccess = (data) => {
  return {
    type: MOST_FRECUENT_AUTHOR_SUCCESS,
    payload: {
      data: data
    }
  }
}

export const mostFrecuentFieldRequest = () => {
  return {
    type: MOST_FRECUENT_FIELD_REQUEST
  }
}

export const mostFrecuentFieldSuccess = (data) => {
  return {
    type: MOST_FRECUENT_FIELD_SUCCESS,
    payload: {
      data: data
    }
  }
}

export const mostFrecuentInstitutionRequest = () => {
  return {
    type: MOST_FRECUENT_INSTITUTION_REQUEST
  }
}

export const mostFrecuentInstitutionSuccess = (data) => {
  return {
    type: MOST_FRECUENT_INSTITUTION_SUCCESS,
    payload: {
      data: data
    }
  }
}

export const mostFrecuentCountryRequest = () => {
  return {
    type: MOST_FRECUENT_COUNTRY_REQUEST
  }
}

export const mostFrecuentCountrySuccess = (data) => {
  return {
    type: MOST_FRECUENT_COUNTRY_SUCCESS,
    payload: {
      data: data
    }
  }
}

export const mostFrecuentPublisherRequest = () => {
  return {
    type: MOST_FRECUENT_PUBLISHER_REQUEST
  }
}

export const mostFrecuentPublisherSuccess = (data) => {
  return {
    type: MOST_FRECUENT_PUBLISHER_SUCCESS,
    payload: {
      data: data
    }
  }
}
