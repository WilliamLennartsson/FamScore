import { 
    DELETE_ITEM
} from './types'

export const deleteListItem = (item) => {
    return {
        type: DELETE_ITEM,
        payload: item
    }
}
