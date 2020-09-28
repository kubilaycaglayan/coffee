import { DEFAULT_FLASH } from '../../../constants';
import { changeFlash } from '../../actions';
import flash from '../../reducers/flash';

describe('flash', () => {
  test('returns the DEFAULT_FLASH as a default object', () => {
    expect(flash(undefined, {})).toEqual(DEFAULT_FLASH);
  });

  test('returns the new state', () => {
    const newFlash = 'Welcome';
    expect(flash(undefined, changeFlash(newFlash))).toEqual(newFlash);
  });
});
