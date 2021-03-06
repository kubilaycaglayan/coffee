export const credentials = {
  email: 'kubilay@coffee.com',
  password: '000000',
};
export const ATTEMPT = 'ATTEMPT';
export const LOADING = 'LOADING';
export const READY = 'READY';
export const CREATE_SESSION = 'CREATE_SESSION';
export const DESTROY_SESSION = 'DESTROY_SESSION';
export const RECORD_COFFEES = 'RECORD_COFFEES';
export const RECORD_COFFEE = 'RECORD_COFFEE';
export const RECORD_FAVORITES = 'RECORD_FAVORITES';
export const CHANGE_NEW_COFFEE = 'CHANGE_NEW_COFFEE';
export const CHANGE_FLASH = 'CHANGE_FLASH';
export const CHANGE_STATUS = 'CHANGE_STATUS';

export const LOGIN_URL = '/sessions';
export const LOGOUT_URL = '/sessions/';
export const SESSION_URL = '/sessions/';
export const GET_COFFEES_URL = '/api/coffees';
export const GET_COFFEE_URL = '/api/coffees/';
export const GET_FAVORITES_URL = '/api/favorites/';
export const CREATE_FAVORITE_URL = '/api/favorites/';
export const DELETE_FAVORITE_URL = '/api/favorites/';
export const CREATE_COFFEE_URL = '/api/coffees/';
export const CREATE_USER_URL = '/api/users/';
export const PROXY_TEST = 'http://localhost:3000';

export const DEFAULT_SESSION = {
  loggedIn: false,
  email: 'default@mail.com',
  id: 0,
};
export const DEFAULT_COFFEE = {
  id: 0,
  name: '',
  description: '',
  photo: '',
};
export const NEW_COFFEE = {
  name: '',
  description: '',
  photo_attributes: {
    image: '',
  },
};
export const DEFAULT_COFFEES = [];
export const DEFAULT_FAVORITES = [];
export const DEFAULT_FLASH = 'false';
export const DEFAULT_STATUS = READY;

export const INITIAL_STATE = {
  session: DEFAULT_SESSION,
  coffees: DEFAULT_COFFEES,
  coffee: DEFAULT_COFFEE,
  favorites: DEFAULT_FAVORITES,
  newCoffee: NEW_COFFEE,
  flash: DEFAULT_FLASH,
};
