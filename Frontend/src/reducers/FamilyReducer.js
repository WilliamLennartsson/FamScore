import {
    SET_FAMILY
} from '../actions/types'

const INITIAL_STATE = {
    familyName: '',
    password: '',
    familyObject: {}
}

export default (state = INITIAL_STATE, action) => {
    console.log('Action: ', action);
    switch (action.type) {
        case SET_FAMILY:
            return {
                ...state,
                familyObject: action.payload
            }
        default:
            return state
    }
}
