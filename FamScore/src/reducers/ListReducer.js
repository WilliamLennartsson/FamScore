import {
    DELETE_ITEM
} from '../actions/types'

const INITIAL_STATE = {
    list: [
        {
            points: 50,
            titleText: 'Tjena',
            infoText: 'gahafgadfgagragra'
        },
        {
            points: 100,
            titleText: 'Hallå',
            infoText: 'grghhthtafeefefe'
        }
    ]
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
