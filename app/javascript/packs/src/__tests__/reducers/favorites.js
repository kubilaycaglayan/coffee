import { DEFAULT_FAVORITES } from '../../../constants';
import { recordFavorites } from '../../actions';
import favorites from '../../reducers/favorites';

describe('favorites', () => {
  test('returns the DEFAULT_FAVORITES as a default object', () => {
    expect(favorites(undefined, {})).toEqual(DEFAULT_FAVORITES);
  });

  test('returns the new state', () => {
    const newCoffees = [
      ...DEFAULT_FAVORITES,
      {
        name: 'Musasa Ruanda',
      },
    ];
    expect(favorites(undefined, recordFavorites(newCoffees))).toEqual(newCoffees);
  });
});
