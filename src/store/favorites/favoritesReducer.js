import {FAVORITE_ADD, FAVORITE_REMOVE} from './favoritesActionTypes'

 const favoritesReducer = (state = [], action) => {
    switch (action.type) {
        case FAVORITE_ADD:
            return {
                ...state
            }
    }
   return state
}

export default favoritesReducer