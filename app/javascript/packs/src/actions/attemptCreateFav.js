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
          dispatch(autoFlash('Item added to favorites'));
        } else {
          dispatch(autoFlash('Something went wrong'));
        }
      },
    );
};

export default attemptCreateFav;
