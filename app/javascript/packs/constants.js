export const credentials = {
  email: 'a@a.com',
  password: '000000',
};
export const ATTEMPT = 'ATTEMPT';
export const LOADING = 'LOADING';
export const CREATE_SESSION = 'CREATE_SESSION';
export const DESTROY_SESSION = 'DESTROY_SESSION';

export const LOGIN_URL = 'http://localhost:3000/sessions/create/';
export const LOGOUT_URL = 'http://localhost:3000/sessions/destroy/';

export const DEFAULT_SESSION = {
  loggedIn: false,
  email: '',
};
export const INITIAL_STATE = {
  session: DEFAULT_SESSION,
};
