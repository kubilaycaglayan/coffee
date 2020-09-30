import recordFavorites from './recordFavorites';
import changeStatus from './changeStatus';
import autoFlash from './autoFlash';
import { favoritesIndex } from '../API';
import { LOADING, READY } from '../../constants';

const getFavorites = () => dispatch => {
  dispatch(changeStatus(LOADING));
  favoritesIndex()
    .then(
      response => {
        dispatch(recordFavorites(response));
        dispatch(changeStatus(READY));
      },
    )
    .catch(
      () => {
        dispatch(autoFlash('Something went wrong.'));
        dispatch(changeStatus(READY));
      },
    );
};

export default getFavorites;
