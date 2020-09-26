import React from 'react';
import { connect } from 'react-redux';
import { createNewCoffee, changeNewCoffee } from '../actions';

const CoffeeForm = props => {

  const handleNameChange = e => {
    changeNewCoffee()
  }

  return (
    <form>
      <label htmlFor="name" >
        Coffe Name
      </label>
      <input id="name" onChange={handleNameChange}/>
      <label htmlFor="description" >
        Description
      </label>
      <input id="description" onChange={handleDescriptionChange}/>
      <label htmlFor="file" >
        Image
      </label>
      <input id="file" type="file" />
      <button type="button" onClick={() => {handleSubmit(newCoffee); }} />
    </form>
  );
};

const mapStateToProps = state => ({
  newCoffee: state.newCoffee,
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: newCoffee => dispatch(createNewCoffee(newCoffee)),
  handleNameChange: e => dispatch(changeNewCoffee({ name: e.target.value })),
  handleDescriptionChange: e => dispatch(changeNewCoffee({ description: e.target.value })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoffeeForm);
