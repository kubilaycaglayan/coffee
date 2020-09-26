import React from 'react';
import { connect } from 'react-redux';
import { attemptCreateCoffee, changeNewCoffee } from '../actions';

const CoffeeForm = props => {
  const {
    handleDescriptionChange, handleNameChange, handleSubmit, newCoffee, handlePhotoChange,
  } = props;

  return (
    <form>
      <label htmlFor="name">
        Coffe Name
        <input name="coffee[name]" id="name" onChange={e => { handleNameChange(e, newCoffee); }} />
      </label>
      <label htmlFor="description">
        Description
        <input name="coffee[description]" id="description" onChange={e => { handleDescriptionChange(e, newCoffee); }} />
      </label>
      <label htmlFor="file">
        Image
        <input name="coffee[photo][image]" id="file" type="file" onChange={e => { handlePhotoChange(e, newCoffee); }} />
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
  newCoffee => {
    const form = new FormData();
    form.append('coffee[name]', newCoffee.name);
    form.append('coffee[description]', newCoffee.description);
    form.append('coffee[photo][image]', newCoffee.photo.image);
    dispatch(attemptCreateCoffee(newCoffee));
  },
  handleNameChange:
  (e, newCoffee) => dispatch(changeNewCoffee({ ...newCoffee, name: e.target.value })),
  handleDescriptionChange:
  (e, newCoffee) => dispatch(changeNewCoffee({ ...newCoffee, description: e.target.value })),
  handlePhotoChange:
  (e, newCoffee) => dispatch(changeNewCoffee({ ...newCoffee, photo: { image: e.target.value } })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoffeeForm);