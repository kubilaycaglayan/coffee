import { deleteFavorite } from '../API';
import getFavorites from './getFavorites';
import getCoffee from './getCoffee';

const attemptDeleteFav = id => {

  return dispatch => {
    deleteFavorite(id)
      .then(
        response => {
          if (response.success) {
            dispatch(getFavorites());
            dispatch(getCoffee(id));
          } else {
            console.log('fav deletion not successful');
          }
        },
      );
  };
};

export default attemptDeleteFav;
