import { 
    DELETE_ITEM,
    SHOW_ADD_MISSION,
    ADD_MISSION
} from './types'

export const deleteListItem = (item) => {
    return {
        type: DELETE_ITEM,
        payload: item
    }
}

export const showAddMission = (visible) => {
    console.log('showAddMission ran.: ', visible);
    
    return {
        type: SHOW_ADD_MISSION,
        payload: visible
    }
}

export const addMission = (mission) => {
    console.log('addMission ran.')

    return {
        type: ADD_MISSION,
        payload: mission
    }
}
