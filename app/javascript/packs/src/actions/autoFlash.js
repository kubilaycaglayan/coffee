import changeFlash from './changeFlash';

const autoFlash = message => {
  return dispatch => {
    dispatch(changeFlash(message));
    setTimeout(() => {
      dispatch(changeFlash(false));
    }, 5000);
  };
};

export default autoFlash;
