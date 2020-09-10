import { GET_DETAILS } from './oneAlbumActionTypes';
import axios from 'axios';

const getAlbumDetails = (artistName, albumName) => async (dispatch) => {
  try {
    const result = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${process.env.REACT_APP_LAST_FM_API_KEY}&artist=${artistName}&album=${albumName}&format=json`
    );
    dispatch({
      type: GET_DETAILS,
      payload: result.data.album,
    });
  } catch (err) {
    console.log(err);
  }
};



export { getAlbumDetails };
