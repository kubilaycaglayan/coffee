import { createFavorite } from '../API';
import getFavorites from './getFavorites';

const attemptCreateFav = data => {

  return dispatch => {
    createFavorite(data)
      .then(
        response => {
          if (response.success) {
            dispatch(getFavorites());
          } else {
            console.log('fav creation not successful');
          }
        },
      );
  };
};

export default attemptCreateFav;
