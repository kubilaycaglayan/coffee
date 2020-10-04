import { CHANGE_FLASH } from '../../constants';

const changeFlash = message => ({
  type: CHANGE_FLASH,
  message,
});

export default changeFlash;
