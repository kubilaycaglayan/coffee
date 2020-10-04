import { NEW_COFFEE } from '../../../constants';
import { changeNewCoffee } from '../../actions';
import newCoffee from '../../reducers/newCoffee';

describe('flash', () => {
  test('returns the DEFAULT_COFFEE as a default object', () => {
    expect(newCoffee(undefined, {})).toEqual(NEW_COFFEE);
  });

  test('returns the new state', () => {
    const newCoffeeObj = {
      name: 'Musasa Ruanda',
    };
    expect(newCoffee(undefined, changeNewCoffee(newCoffeeObj))).toEqual(newCoffeeObj);
  });
});
