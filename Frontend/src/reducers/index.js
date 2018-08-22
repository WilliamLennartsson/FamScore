import { combineReducers } from 'redux'
import ListReducer from './ListReducer'
import RewardsReducer from './RewardsReducer'

export default combineReducers({
    listReducer: ListReducer,
    rewardsReducer: RewardsReducer
})
