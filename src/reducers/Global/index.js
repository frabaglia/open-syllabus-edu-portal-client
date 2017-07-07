import {
  Map
} from 'immutable';

import {
  ERROR,
  WARNING,
  MSG,
  LOGIN_REDIRECT
} from '../../constants/eduportal/action-types/Global'

const initialGlobal = Map({
  lastMessage: false,
  type: false,
  updatedAt: false
})

export default function global(globalState = initialGlobal, action) {

  switch (action.type) {
    case ERROR:
      {
        let _globalState = globalState.setIn(['type'], ERROR)
        let __globalState = _globalState.setIn(['updatedAt'], new Date())
        return __globalState.setIn(['lastMessage'], action.payload.message)
        break
      }

    case WARNING:
      {
        let _globalState = globalState.setIn(['type'], WARNING)
        let __globalState = _globalState.setIn(['updatedAt'], new Date())
        return __globalState.setIn(['lastMessage'], action.payload.message)
        break
      }

    case MSG:
      {
        let _globalState = globalState.setIn(['type'], MSG)
        let __globalState = _globalState.setIn(['updatedAt'], new Date())
        return __globalState.setIn(['lastMessage'], action.payload.message)
        break
      }

    case LOGIN_REDIRECT:
      {
        window.location.replace(action.payload.redirectTo)
        return globalState
        break
      }

    default:
      return globalState
  }
}
