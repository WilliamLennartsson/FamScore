import {
    SET_FAMILY, 
    SET_LOGGED_IN
} from '../actions/types'

const INITIAL_STATE = {
    familyName: '',
    password: '',
    familyObject: {},
    isLoggedIn: false,
    nickName: ''
}

export default (state = INITIAL_STATE, action) => {
    console.log('Action: ', action);
    switch (action.type) {
        case SET_FAMILY:
            return {
                ...state,
                familyObject: action.payload
            }
        case SET_LOGGED_IN:
            return {
                ...state,
                nickName: action.payload,
                isLoggedIn: action.payload
            }
        default:
            return state
    }
}

