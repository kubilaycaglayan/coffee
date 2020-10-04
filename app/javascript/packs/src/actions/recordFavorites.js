import { RECORD_FAVORITES } from '../../constants';

const recordCoffees = coffees => ({
  type: RECORD_FAVORITES,
  coffees,
});

export default recordCoffees;
