import changeFlash from './changeFlash';

const autoFlash = message => dispatch => {
  dispatch(changeFlash(message));
  setTimeout(() => {
    dispatch(changeFlash('false'));
  }, 5000);
};

export default autoFlash;
