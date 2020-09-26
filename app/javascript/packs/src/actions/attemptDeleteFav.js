import { deleteFavorite } from '../API';
import getFavorites from './getFavorites';

const attemptDeleteFav = id => {

  return dispatch => {
    deleteFavorite(id)
      .then(
        response => {
          if (response.success) {
            dispatch(getFavorites());
          } else {
            console.log('fav deletion not successful');
          }
        },
      );
  };
};

export default attemptDeleteFav;
