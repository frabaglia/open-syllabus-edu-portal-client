import {
  List,
  Map,
} from 'immutable';

// import {
//   TYPE_TITLE,
//   TYPE_AUTHOR,
//   TYPE_FULL_TEXT,
//   TYPE_INSTRUCTOR
// } from '../../constants/eduportal/store-types'

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
} from '../../constants/eduportal/action-types/Landing'

const universityLandingState = Map({
  isFetching: false,
  mostFrecuent: Map({
    selectedYear: null,
    data: new List()
  }),
  fieldChart: new List(),
  updatedAt: false
})

const universityFieldLandingState = Map({
  isFetching: false,
  closestPeerTeachingProfiles: Map({
    showAll: false,
    selectedYear: null,
    data: new List()
  }),
  mostFrecuent: new List(),
  updatedAt: false
})

const universityFieldYearLandingState = Map({
  isFetching: false,
  mostFrecuent: Map({
    data: new List(),
    selectedText: 0
  }),
  updatedAt: false
})

const initialLandingState = Map({
  universityLandingState,
  universityFieldLandingState,
  universityFieldYearLandingState
})

//TODO: Add all filtering UI + Data Store (fulltexts, authors, titles, instructors)
export default function landing(landingState = initialLandingState, action) {

  switch (action.type) {
    /* UI */
    case LANDING_UNIVERSITY_SELECTED_YEAR:
      {
        return landingState.setIn(['universityLandingState', 'closestPeerTeachingProfiles', 'showAll'], action.payload)
        break
      }
    case LANDING_UNIVERSITY_FIELD_SHOW_ALL:
      {
        return landingState.setIn(['universityFieldLandingState', 'closestPeerTeachingProfiles', 'showAll'], true)
        break
      }
    case LANDING_UNIVERSITY_FIELD_SHOW_OWN:
      {
        return landingState.setIn(['universityFieldLandingState', 'closestPeerTeachingProfiles', 'showAll'], false)
        break
      }
    case LANDING_UNIVERSITY_FIELD_SELECTED_YEAR:
      {
        return landingState.setIn(['universityFieldLandingState', 'closestPeerTeachingProfiles', 'selectedYear'], action.payload)
        break
      }
    case LANDING_UNIVERSITY_FIELD_YEAR_SELECTED_TEXT:
      {
        if (action.payload < landingState.getIn(['universityFieldYearLandingState', 'mostFrecuent','data']).size) {
          return landingState.setIn(['universityFieldYearLandingState', 'mostFrecuent', 'selectedText'], action.payload)
        } else {
          return landingState
        }
        break
      }
      /* DATA STORE */
    case LANDING_UNIVERSITY_REQUEST:
      {
        return landingState.setIn(['universityLandingState', 'isFetching'], true)
        break
      }
    case LANDING_UNIVERSITY_FIELD_REQUEST:
      {
        return landingState.setIn(['universityFieldYearLandingState', 'isFetching'], true)
        break
      }
    case LANDING_UNIVERSITY_FIELD_YEAR_REQUEST:
      {
        return landingState.setIn(['universityFieldYearLandingState', 'isFetching'], true)
        break
      }

    case LANDING_UNIVERSITY_SUCCESS:
      {
        let _landingState = landingState.setIn(['universityLandingState', 'mostFrecuent', 'data'], new List(action.payload.data.mostFrecuent))
        let __landingState = _landingState.setIn(['universityLandingState', 'fieldChart'], new List(action.payload.data.fieldChart))
        let ___landingState = __landingState.setIn(['universityLandingState', 'updatedAt'], new Date())
        return ___landingState.setIn(['universityLandingState', 'isFetching'], false)
        break
      }
    case LANDING_UNIVERSITY_FIELD_SUCCESS:
      {
        let _landingState = landingState.setIn(['universityFieldLandingState', 'mostFrecuent'], new List(action.payload.data.mostFrecuent))
        let __landingState = _landingState.setIn(['universityFieldLandingState', 'closestPeerTeachingProfiles', 'data'], new List(action.payload.data.fieldChart))
        let ___landingState = __landingState.setIn(['universityFieldLandingState', 'updatedAt'], new Date())
        return ___landingState.setIn(['universityFieldLandingState', 'isFetching'], false)
      }
    case LANDING_UNIVERSITY_FIELD_YEAR_SUCCESS:
      {
        let _landingState = landingState.setIn(['universityFieldYearLandingState', 'mostFrecuent', 'data'], new List(action.payload.data.mostFrecuent))
        let __landingState = _landingState.setIn(['universityFieldYearLandingState', 'updatedAt'], new Date())
        return __landingState.setIn(['universityFieldYearLandingState', 'isFetching'], false)
        break
      }
    default:
      return landingState
  }
}
