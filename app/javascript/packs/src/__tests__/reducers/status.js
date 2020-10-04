import status from '../../reducers/status';
import { changeStatus } from '../../actions';
import { DEFAULT_STATUS, LOADING } from '../../../constants';

describe('status', () => {
  test('returns the DEFAULT_STATUS as a default setting', () => {
    expect(status(undefined, {})).toEqual(DEFAULT_STATUS);
  });

  test('returns the new state', () => {
    expect(status(undefined, changeStatus(LOADING))).toEqual(LOADING);
  });
});
