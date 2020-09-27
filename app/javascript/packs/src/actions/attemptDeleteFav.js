import { deleteFavorite } from '../API';
import getFavorites from './getFavorites';
import getCoffee from './getCoffee';
import autoFlash from './autoFlash';

const attemptDeleteFav = id => dispatch => {
  deleteFavorite(id)
    .then(
      response => {
        if (response.success) {
          dispatch(getFavorites());
          dispatch(getCoffee(id));
        } else {
          dispatch(autoFlash('Something went wrong.'));
        }
      },
    );
};

export default attemptDeleteFav;
