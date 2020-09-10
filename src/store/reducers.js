import { combineReducers } from 'redux';
import favoritesReducer from './favorites/favoritesReducer';
import albumsReducer from './albums/albumsReducer'
import oneAlbumReducer from './oneAlbum/oneAlbumReducer';

export default combineReducers({
  favorites: favoritesReducer,
  albums: albumsReducer,
  singleAlbumDetails: oneAlbumReducer
});
