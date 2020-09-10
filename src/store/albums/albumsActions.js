import { GET_ABLUMS, SORT_ALBUMS, SEARCH_ABLUMS, CLEAR_SEARCH } from './albumsActionTypes';
import axios from 'axios';

const getAlbums = (artistName) => async (dispatch) => {
  try {
    const result = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artistName}&api_key=${process.env.REACT_APP_LAST_FM_API_KEY}&format=json`
    );
    dispatch({
      type: GET_ABLUMS,
      payload: result.data.topalbums.album,
    });
  } catch (err) {
    console.log(err);
  }
};

const sortAlbums = () => ({
    type:SORT_ALBUMS
});


const searchAlbums = (value) => ({
    type:SEARCH_ABLUMS,
    payload: value
});

const clearSearch = () => ({
    type:CLEAR_SEARCH
});

export { getAlbums, sortAlbums, searchAlbums, clearSearch };
