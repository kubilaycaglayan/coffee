import { createFavorite } from '../API';
import getFavorites from './getFavorites';
import getCoffee from './getCoffee';

const attemptCreateFav = id => {

  return dispatch => {
    createFavorite(id)
      .then(
        response => {
          if (response.success) {
            dispatch(getFavorites());
            dispatch(getCoffee(id));
          } else {
            console.log('fav creation not successful');
          }
        },
      );
  };
};

export default attemptCreateFav;
