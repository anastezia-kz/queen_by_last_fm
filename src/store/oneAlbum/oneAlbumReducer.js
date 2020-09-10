import { GET_DETAILS } from './oneAlbumActionTypes';

 

export default (state = null, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return action.payload;
     
    default:
      return state;
  }
};
