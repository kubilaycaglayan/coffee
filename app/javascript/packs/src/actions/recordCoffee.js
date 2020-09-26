import { RECORD_COFFEE } from '../../constants';

const recordCoffee = coffee => ({
  type: RECORD_COFFEE,
  coffee,
});

export default recordCoffee;
