import {
    TYPE_TITLE,
    TYPE_AUTHOR,
    TYPE_INSTITUTION,
    TYPE_FIELD,
    TYPE_COUNTRY,
    TYPE_PUBLISHER,
    TYPE_INSTITUTION_FIELD
} from '../../store/storeTypes'

const MOST_FRECUENT = "MOST_FRECUENT"
export const MOST_FRECUENT_TYPE_UPDATE = "MOST_FRECUENT_TYPE_UPDATE"

export const MOST_FRECUENT_TITLE = MOST_FRECUENT + TYPE_TITLE
export const MOST_FRECUENT_FIELD = MOST_FRECUENT + TYPE_FIELD
export const MOST_FRECUENT_AUTHOR = MOST_FRECUENT + TYPE_AUTHOR
export const MOST_FRECUENT_INSTITUTION = MOST_FRECUENT + TYPE_INSTITUTION
export const MOST_FRECUENT_COUNTRY = MOST_FRECUENT + TYPE_COUNTRY
export const MOST_FRECUENT_PUBLISHER = MOST_FRECUENT + TYPE_PUBLISHER

export const MOST_FRECUENT_TITLE_REQUEST = MOST_FRECUENT_TITLE + "REQUEST"
export const MOST_FRECUENT_FIELD_REQUEST = MOST_FRECUENT_FIELD + "REQUEST"
export const MOST_FRECUENT_AUTHOR_REQUEST = MOST_FRECUENT_AUTHOR + "REQUEST"
export const MOST_FRECUENT_INSTITUTION_REQUEST = MOST_FRECUENT_INSTITUTION + "REQUEST"
export const MOST_FRECUENT_COUNTRY_REQUEST = MOST_FRECUENT_COUNTRY + "REQUEST"
export const MOST_FRECUENT_PUBLISHER_REQUEST = MOST_FRECUENT_PUBLISHER + "REQUEST"

export const MOST_FRECUENT_TITLE_FAILURE = MOST_FRECUENT_TITLE + "FAILURE"
export const MOST_FRECUENT_FIELD_FAILURE = MOST_FRECUENT_FIELD + "FAILURE"
export const MOST_FRECUENT_AUTHOR_FAILURE = MOST_FRECUENT_AUTHOR + "FAILURE"
export const MOST_FRECUENT_INSTITUTION_FAILURE = MOST_FRECUENT_INSTITUTION + "FAILURE"
export const MOST_FRECUENT_COUNTRY_FAILURE = MOST_FRECUENT_COUNTRY + "FAILURE"
export const MOST_FRECUENT_PUBLISHER_FAILURE = MOST_FRECUENT_PUBLISHER + "FAILURE"

export const MOST_FRECUENT_TITLE_SUCCESS = MOST_FRECUENT_TITLE + "SUCCESS"
export const MOST_FRECUENT_FIELD_SUCCESS = MOST_FRECUENT_FIELD + "SUCCESS"
export const MOST_FRECUENT_AUTHOR_SUCCESS = MOST_FRECUENT_AUTHOR + "SUCCESS"
export const MOST_FRECUENT_INSTITUTION_SUCCESS = MOST_FRECUENT_INSTITUTION + "SUCCESS"
export const MOST_FRECUENT_COUNTRY_SUCCESS = MOST_FRECUENT_COUNTRY + "SUCCESS"
export const MOST_FRECUENT_PUBLISHER_SUCCESS = MOST_FRECUENT_PUBLISHER + "SUCCESS"

export const LANDING_REQUEST = "LANDING_REQUEST"
export const LANDING_SUCCESS = "LANDING_SUCCESS"
export const LANDING_FAILURE = "LANDING_FAILURE"

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
