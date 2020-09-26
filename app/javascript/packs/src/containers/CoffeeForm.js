import React from 'react';
import { connect } from 'react-redux';
import { attemptCreateCoffee, changeNewCoffee } from '../actions';

const CoffeeForm = props => {
  const { handleDescriptionChange, handleNameChange, handleSubmit, newCoffee } = props;

  return (
    <form>
      <label htmlFor="name">
        Coffe Name
        <input id="name" onChange={e => { handleNameChange(e, newCoffee); }} />
      </label>
      <label htmlFor="description">
        Description
        <input id="description" onChange={e => { handleDescriptionChange(e, newCoffee); }} />
      </label>
      <label htmlFor="file">
        Image
        <input id="file" type="file" />
      </label>
      <button type="button" onClick={() => { handleSubmit(newCoffee); }}>Add Coffee</button>
    </form>
  );
};

const mapStateToProps = state => ({
  newCoffee: state.newCoffee,
});

const mapDispatchToProps = dispatch => ({
  handleSubmit:
  newCoffee => dispatch(attemptCreateCoffee(newCoffee)),
  handleNameChange:
  (e, newCoffee) => dispatch(changeNewCoffee({ ...newCoffee, name: e.target.value })),
  handleDescriptionChange:
  (e, newCoffee) => dispatch(changeNewCoffee({ ...newCoffee, description: e.target.value })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoffeeForm);
