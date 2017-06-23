import {
  ERROR,
  WARNING,
  MSG
} from '../../action-types/GlobalMessages'

export const globalError = (error) => {
  return {
    type: ERROR,
    payload: {
      error: error
    }
  }
}

export const globalWarning = (warning) => {
  return {
    type: WARNING,
    payload: {
      warning: warning
    }
  }
}

export const globalMessage = (msg) => {
  return {
    type: MSG,
    payload: {
      msg: msg
    }
  }
}
