import recordFavorites from './recordFavorites';
import { favoritesIndex } from '../API';

const getFavorites = () => {

  return dispatch => {
    favoritesIndex()
      .then(
        response => {
          dispatch(recordFavorites(response));
        },
      );
  };
};

export default getFavorites;
