import { 
    DELETE_ITEM
} from '../actions/types'

const INITIAL_STATE = { 
    list: []
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case DELETE_ITEM:
            return { 
                ...state, 
                list: action.payload 
            }
        default:
            return state
    }
}
