import { createFavorite } from '../API';
import getFavorites from './getFavorites';
import getCoffee from './getCoffee';
import autoFlash from './autoFlash';

const attemptCreateFav = id => dispatch => {
  createFavorite(id)
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

export default attemptCreateFav;
