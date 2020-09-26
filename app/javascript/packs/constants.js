export const credentials = {
  email: 'a@a.com',
  password: '000000',
};
export const ATTEMPT = 'ATTEMPT';
export const LOADING = 'LOADING';
export const CREATE_SESSION = 'CREATE_SESSION';
export const DESTROY_SESSION = 'DESTROY_SESSION';
export const RECORD_COFFEES = 'RECORD_COFFEES';

export const LOGIN_URL = 'http://localhost:3000/sessions/create/';
export const LOGOUT_URL = 'http://localhost:3000/sessions/destroy/';
export const GET_COFFEES_URL = 'http://localhost:3000/api/coffees/';

export const DEFAULT_SESSION = {
  loggedIn: false,
  email: '',
};
export const DEFAULT_COFFEES = [{}];

export const INITIAL_STATE = {
  session: DEFAULT_SESSION,
  coffees: [],
};
