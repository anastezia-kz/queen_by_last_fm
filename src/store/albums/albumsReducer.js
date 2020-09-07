import { GET_ABLUMS,SORT_ALBUMS, SEARCH_ABLUMS, CLEAR_SEARCH } from './albumsActionTypes'

const initialState = {
    allAlbums:[],
    searchedAlbums:[],
    searchString:''
}

export default (state=initialState, action) => {
    switch (action.type){
        case GET_ABLUMS:
            return {
                ...state, 
                allAlbums: action.payload,
                searchedAlbums:action.payload
            };
        case SORT_ALBUMS:
            return {
                ...state,
               searchedAlbums:[...state.allAlbums].sort((a, b) => a.name.localeCompare(b.name))
            
            }; 
        case SEARCH_ABLUMS:
            return {
                ...state,
                searchString:action.payload,
                searchedAlbums: state.allAlbums.filter((album) => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return album.name.match(regex)})
            };    
        case CLEAR_SEARCH:
            return{
                ...state,
                searchedAlbums:state.allAlbums
            }    
        default:
            return state
    }
}