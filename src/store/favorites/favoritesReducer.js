import { FAVORITE_ADD } from './favoritesActionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case FAVORITE_ADD:
      const newState = { ...state };
      if (state[action.payload]) {
        delete newState[action.payload];
      } else {
        newState[action.payload] = true;
      }
      return newState;
  }
  return state;
};
