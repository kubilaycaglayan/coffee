export const credentials = {
  email: 'a@a.com',
  password: '000000',
};
export const ATTEMPT = 'ATTEMPT';
export const LOADING = 'LOADING';
export const CREATE_SESSION = 'CREATE_SESSION';
export const DESTROY_SESSION = 'DESTROY_SESSION';
export const RECORD_COFFEES = 'RECORD_COFFEES';
export const RECORD_COFFEE = 'RECORD_COFFEE';
export const RECORD_FAVORITES = 'RECORD_FAVORITES';

export const LOGIN_URL = '/sessions';
export const LOGOUT_URL = '/sessions/';
export const GET_COFFEES_URL = '/api/coffees';
export const GET_COFFEE_URL = '/api/coffees/';
export const GET_FAVORITES_URL = '/api/favorites/';
export const CREATE_FAVORITE_URL = '/api/favorites/';
export const DELETE_FAVORITE_URL = '/api/favorites/';

export const DEFAULT_SESSION = {
  loggedIn: false,
  email: '',
  id: '',
};
export const DEFAULT_COFFEE = {
  id: 0,
  name: '',
  description: '',
  photo: '',
};
export const DEFAULT_COFFEES = [DEFAULT_COFFEE];
export const DEFAULT_FAVORITES = [DEFAULT_COFFEE];

export const INITIAL_STATE = {
  session: DEFAULT_SESSION,
  coffees: DEFAULT_COFFEES,
  coffee: DEFAULT_COFFEE,
  favorites: DEFAULT_FAVORITES,
};
