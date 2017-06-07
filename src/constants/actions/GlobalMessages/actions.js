export const ERROR = 'ERROR'

export const globalError = (error) => {
    return {
        type: ERROR,
        payload: {
            error: error
        }
    }
}

export const WARNING = 'WARNING'

export const globalWarning = (warning) => {
    return {
        type: WARNING,
        payload: {
            warning: warning
        }
    }
}

export const MSG = 'MSG'

export const globalMessage = (msg) => {
    return {
        type: MSG,
        payload: {
            msg: msg
        }
    }
}
