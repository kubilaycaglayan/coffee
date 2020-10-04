import { CHANGE_FLASH, DEFAULT_FLASH } from '../../constants';

const flash = (state = DEFAULT_FLASH, action) => {
  switch (action.type) {
    case CHANGE_FLASH:
      return action.message;
    default:
      return state;
  }
};

export default flash;
