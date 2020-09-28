import coffee from '../../reducers/coffee';
import { recordCoffee } from '../../actions';
import { DEFAULT_COFFEE } from '../../../constants';

describe('coffee', () => {
  test('returns the DEFAULT_COFFEE as a default setting', () => {
    expect(coffee(undefined, {})).toEqual(DEFAULT_COFFEE);
  });

  test('returns the new state', () => {
    const newCoffee = {
      name: 'Musasa Ruanda',
    };
    expect(coffee(undefined, recordCoffee(newCoffee))).toEqual(newCoffee);
  });
});
