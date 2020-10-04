import { DEFAULT_SESSION } from '../../../constants';
import { createSession, destroySession } from '../../actions';
import session from '../../reducers/session';

describe('flash', () => {
  test('returns the DEFAULT_SESSION as a default object', () => {
    expect(session(undefined, {})).toEqual(DEFAULT_SESSION);
  });

  describe('returns the new state', () => {
    test('CREATE_SESSION', () => {
      const user = {
        email: 'kubilay@microverse.com',
        id: 0,
      };
      const expectedObject = {
        loggedIn: true,
        email: 'kubilay@microverse.com',
        id: 0,
      };
      expect(session(undefined, createSession(user))).toEqual(expectedObject);
    });

    test('DESTROY_SESSION', () => {
      expect(session(undefined, destroySession())).toEqual(DEFAULT_SESSION);
    });
  });
});
