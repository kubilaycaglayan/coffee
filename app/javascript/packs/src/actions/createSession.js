import { CREATE_SESSION } from '../../constants';

const createSession = email => ({
  type: CREATE_SESSION,
  email,
});

export default createSession;
