import { CHANGE_STATUS } from '../../constants';

const changeStatus = status => ({
  type: CHANGE_STATUS,
  status,
});

export default changeStatus;
