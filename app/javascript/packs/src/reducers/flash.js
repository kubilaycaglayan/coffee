import { CHANGE_FLASH } from '../../constants';

const flash = (state = CHANGE_FLASH, action) => {
  switch (action.type) {
    case CHANGE_FLASH:
      return action.message;
    default:
      return state;
  }
};

export default flash;
