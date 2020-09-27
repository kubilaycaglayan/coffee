import recordFavorites from './recordFavorites';
import autoFlash from './autoFlash';
import { favoritesIndex } from '../API';

const getFavorites = () => dispatch => {
  favoritesIndex()
    .then(
      response => {
        dispatch(recordFavorites(response));
      },
    )
    .catch(
      () => {
        dispatch(autoFlash('Something went wrong.'));
      },
    );
};

export default getFavorites;
