import {
  ERROR,
  WARNING,
  MSG
} from '../../action-types/Global'

export const globalError = (error) => {
  return {
    type: ERROR,
    payload: error
  }
}

export const globalWarning = (warning) => {
  return {
    type: WARNING,
    payload: warning
  }
}

export const globalMessage = (msg) => {
  return {
    type: MSG,
    payload: msg
  }
}
