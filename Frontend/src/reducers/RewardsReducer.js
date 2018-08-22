import {
    CHECK_IF_ADMIN,
    SET_ADMIN
} from '../actions/types'

const INITIAL_STATE = {
    isAdmin: false
}

export default (state = INITIAL_STATE, action) => {
    console.log('Action: ', action);
    switch (action.type) {
        case CHECK_IF_ADMIN:
            return {
                ...state
            }
        case SET_ADMIN:
            return {
                ...state,
                isAdmin: action.payload
            }
        default:
            return state
    }
}
