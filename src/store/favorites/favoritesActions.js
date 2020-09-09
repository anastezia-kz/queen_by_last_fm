import {FAVORITE_ADD} from './favoritesActionTypes'

export const addFavorite = (key) => ({
    type:FAVORITE_ADD,
    payload:key
})