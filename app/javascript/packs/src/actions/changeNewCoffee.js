import { CHANGE_NEW_COFFEE } from '../../constants';

const changeNewCoffee = coffee => ({
  type: CHANGE_NEW_COFFEE,
  coffee,
});

export default changeNewCoffee;
