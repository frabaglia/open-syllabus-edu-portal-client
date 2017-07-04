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
} from '../../constants/eduportal/action-types/Landing'

const universityLandingState = Map({
  isFetching: false,
  universityField: new List(),
  mostFrecuent: new List(),
  fieldChart: new List(),
  updatedAt: false
})

const universityFieldLandingState = Map({
  isFetching: false,
  closestPeerTeachingProfiles: new List(),
  fieldChart: new List(),
  topRanked: new Map({}),
  syllabyAvailableByYear: new List(),
  updatedAt: false
})

const universityFieldYearLandingState = Map({
  isFetching: false,
  mostFrecuent: new List(),
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
        let _landingState = landingState.setIn(['universityLandingState', 'mostFrecuent'], new List(action.payload.data.mostFrecuent))
        let __landingState = _landingState.setIn(['universityLandingState', 'universityField'], new List(action.payload.data.universityField))
        let ___landingState = __landingState.setIn(['universityLandingState', 'fieldChart'], new List(action.payload.data.fieldChart))
        let ____landingState = ___landingState.setIn(['universityLandingState', 'updatedAt'], new Date())
        return ____landingState.setIn(['universityLandingState', 'isFetching'], false)
        break
      }
    case LANDING_UNIVERSITY_FIELD_SUCCESS:
      {
        let _landingState = landingState.setIn(['universityFieldLandingState', 'topRanked'], new Map(action.payload.data.topRanked))
        let __landingState = _landingState.setIn(['universityFieldLandingState', 'fieldChart'], new List(action.payload.data.fieldChart))
        let ___landingState = __landingState.setIn(['universityFieldLandingState', 'closestPeerTeachingProfiles'], new List(action.payload.data.closestPeerTeachingProfiles))
        let ____landingState = ___landingState.setIn(['universityFieldLandingState', 'syllabyAvailableByYear'], new List(action.payload.data.syllabyAvailableByYear))
        let _____landingState = ____landingState.setIn(['universityFieldLandingState', 'updatedAt'], new Date())
        return _____landingState.setIn(['universityFieldLandingState', 'isFetching'], false)
      }
    case LANDING_UNIVERSITY_FIELD_YEAR_SUCCESS:
      {
        let _landingState = landingState.setIn(['universityFieldYearLandingState', 'mostFrecuent'], new List(action.payload.data.mostFrecuent))
        let __landingState = _landingState.setIn(['universityFieldYearLandingState', 'updatedAt'], new Date())
        return __landingState.setIn(['universityFieldYearLandingState', 'isFetching'], false)
        break
      }
    default:
      return landingState
  }
}
