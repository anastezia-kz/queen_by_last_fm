import { combineReducers } from 'redux';
import favoritesReducer from './favorites/favoritesReducer';
import albumsReducer from './albums/albumsReducer'

export default combineReducers({
  favorites: favoritesReducer,
  albums: albumsReducer 
});
