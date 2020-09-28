import {
  CHANGE_FLASH,
} from '../../../constants';
import * as action from '../../actions';

describe('actions', () => {
  describe('returns an action object message and the type CHANGE_FLASH', () => {
    test(CHANGE_FLASH, () => {
      const message = 'Success';
      const expectedAction = {
        type: CHANGE_FLASH,
        message,
      };
      expect(action.changeFlash(message)).toEqual(expectedAction);
    });
  });
});
