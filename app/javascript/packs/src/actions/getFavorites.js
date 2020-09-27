import recordFavorites from './recordFavorites';
import autoFlash from './autoFlash';
import { favoritesIndex } from '../API';

const getFavorites = () => dispatch => {
  favoritesIndex()
    .then(
      response => {
        dispatch(recordFavorites(response));
        dispatch(autoFlash('Heres your favs'));
      },
    );
};

export default getFavorites;
