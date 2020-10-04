import coffees from '../../reducers/coffees';
import { recordCoffees } from '../../actions';
import { DEFAULT_COFFEES } from '../../../constants';

describe('coffees', () => {
  test('returns the DEFAULT_COFFEES as a default setting', () => {
    expect(coffees(undefined, {})).toEqual(DEFAULT_COFFEES);
  });

  test('returns the new state', () => {
    const newCoffees = [
      ...DEFAULT_COFFEES,
      {
        name: 'Musasa Ruanda',
      },
    ];
    expect(coffees(undefined, recordCoffees(newCoffees))).toEqual(newCoffees);
  });
});
