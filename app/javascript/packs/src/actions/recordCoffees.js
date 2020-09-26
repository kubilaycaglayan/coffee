import { RECORD_COFFEES } from '../../constants';

const recordCoffees = coffees => ({
  type: RECORD_COFFEES,
  coffees,
});

export default recordCoffees;
