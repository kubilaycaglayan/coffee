import {
  ATTEMPT,
  LOADING,
  CREATE_SESSION,
  DESTROY_SESSION,
  RECORD_COFFEES,
  RECORD_COFFEE,
  RECORD_FAVORITES,
  CHANGE_NEW_COFFEE,
  CHANGE_FLASH,
} from '../../../constants';
import * as action from '../../actions';

describe('actions', () => {
  test('description', () => {
    const filter = '99';
    const expectedAction = {
      type: CHANGE_FILTER,
      filter,
    };
    expect(action.changeFilter(filter)).toEqual(expectedAction);
  });
});
