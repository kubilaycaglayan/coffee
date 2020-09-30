import {
  CHANGE_FLASH,
  CHANGE_NEW_COFFEE,
  CHANGE_STATUS,
  CREATE_SESSION,
  DESTROY_SESSION,
  LOADING,
  RECORD_COFFEE,
  RECORD_COFFEES,
  RECORD_FAVORITES,
} from '../../../constants';
import * as action from '../../actions';

describe('actions', () => {
  describe(CHANGE_FLASH, () => {
    test('returns an action object with message and the type CHANGE_FLASH', () => {
      const message = 'Success';
      const expectedAction = {
        type: CHANGE_FLASH,
        message,
      };
      expect(action.changeFlash(message)).toEqual(expectedAction);
    });
  });

  describe(CHANGE_NEW_COFFEE, () => {
    test('returns an action object with coffee and the type CHANGE_NEW_COFFEE', () => {
      const coffee = {
        name: 'Musasa Ruanda',
        description: 'Tchibo',
      };
      const expectedAction = {
        type: CHANGE_NEW_COFFEE,
        coffee,
      };
      expect(action.changeNewCoffee(coffee)).toEqual(expectedAction);
    });
  });

  describe(RECORD_COFFEE, () => {
    test('returns an action object with coffee and the type RECORD_COFFEE', () => {
      const coffee = {
        name: 'Musasa Ruanda',
        description: 'Tchibo',
      };
      const expectedAction = {
        type: RECORD_COFFEE,
        coffee,
      };
      expect(action.recordCoffee(coffee)).toEqual(expectedAction);
    });
  });

  describe(RECORD_COFFEES, () => {
    test('returns an action object with coffee and the type RECORD_COFFEES', () => {
      const coffees = [
        {
          name: 'Musasa Ruanda',
          description: 'Tchibo',
        },
        {
          name: 'Geisha Bebeka',
          description: 'Ethiopia',
        },
      ];
      const expectedAction = {
        type: RECORD_COFFEES,
        coffees,
      };
      expect(action.recordCoffees(coffees)).toEqual(expectedAction);
    });
  });

  describe(RECORD_FAVORITES, () => {
    test('returns an action object with favorites and the type RECORD_FAVORITES', () => {
      const coffees = [
        {
          name: 'Musasa Ruanda',
          description: 'Tchibo',
        },
        {
          name: 'Geisha Bebeka',
          description: 'Ethiopia',
        },
      ];
      const expectedAction = {
        type: RECORD_FAVORITES,
        coffees,
      };
      expect(action.recordFavorites(coffees)).toEqual(expectedAction);
    });
  });

  describe(CREATE_SESSION, () => {
    test('returns an action object with email, id, and the type CREATE_SESSION', () => {
      const user = {
        email: 'kubilay@microverse.com',
        id: 0,
      };
      const expectedAction = {
        type: CREATE_SESSION,
        email: 'kubilay@microverse.com',
        id: 0,
      };
      expect(action.createSession(user)).toEqual(expectedAction);
    });
  });

  describe(DESTROY_SESSION, () => {
    test('returns an action object with the type DESTROY_SESSION', () => {
      const expectedAction = {
        type: DESTROY_SESSION,
      };
      expect(action.destroySession()).toEqual(expectedAction);
    });
  });

  describe(CHANGE_STATUS, () => {
    test('returns an action object with the type CHANGE_STATUS', () => {
      const expectedAction = {
        type: CHANGE_STATUS,
        status: LOADING,
      };
      expect(action.changeStatus(LOADING)).toEqual(expectedAction);
    });
  });
});
