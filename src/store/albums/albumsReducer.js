import { GET_ABLUMS,SORT_ALBUMS, SEARCH_ABLUMS } from './albumsActionTypes'

export default (state=[], action) => {
    switch (action.type){
        case GET_ABLUMS:
            return action.payload;
        case SORT_ALBUMS:
            return [...state].sort((a, b) => a.name.localeCompare(b.name));    
        default:
            return state
    }
}