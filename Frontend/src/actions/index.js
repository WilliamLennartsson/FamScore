import { 
    DELETE_ITEM,
    SHOW_ADD_MISSION,
    ADD_MISSION,
    CHECK_IF_ADMIN,
    SET_ADMIN,
    SET_FAMILY,
    SET_LOGGED_IN
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

export const setAdmin = (isAdmin) => {
    return {
        type: SET_ADMIN,
        payload: isAdmin
    }
}

export const setFamily = (familyObject) => {
    return {
        type: SET_FAMILY,
        payload: familyObject
    }
}

export const setLoggedIn = (nickName, isLoggedIn) => {
    return {
        type: SET_LOGGED_IN,
        payload: [nickName, isLoggedIn]
    }
}
