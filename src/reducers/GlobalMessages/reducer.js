import {
    List,
    Map,
} from 'immutable';

import {
    ERROR,WARNING,MSG
} from '../../constants/actions/GlobalMessages/actions'

const initialGlobalMessages = Map({
    lastMessage: false,
    type: false,
    updatedAt: false
})

export default function globalMessages(globalMessagesState = initialGlobalMessages, action) {

    switch (action.type) {
        case ERROR:
            {
                let _globalMessagesState = globalMessagesState.setIn(['type'], ERROR)
                let __globalMessagesState = _globalMessagesState.setIn(['updatedAt'], new Date())
                return __globalMessagesState.setIn(['lastMessage'], action.payload.error)
                break
            }

        case WARNING:
            {
                let _globalMessagesState = globalMessagesState.setIn(['type'], WARNING)
                let __globalMessagesState = _globalMessagesState.setIn(['updatedAt'], new Date())
                return __globalMessagesState.setIn(['lastMessage'], action.payload.warning)
                break
            }

        case MSG:
            {
                let _globalMessagesState = globalMessagesState.setIn(['type'], MSG)
                let __globalMessagesState = _globalMessagesState.setIn(['updatedAt'], new Date())
                return __globalMessagesState.setIn(['lastMessage'], action.payload.msg)
                break
            }

        default:
            return globalMessagesState
    }
}
