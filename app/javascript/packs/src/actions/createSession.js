import { CREATE_SESSION } from '../../constants';

const createSession = user => ({
  type: CREATE_SESSION,
  email: user.email,
  id: user.id,
});

export default createSession;
