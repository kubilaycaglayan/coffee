import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { attemptCreateCoffee, changeNewCoffee, autoFlash } from '../actions';

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
    if (newCoffee.name === '') {
      dispatch(autoFlash('Name can\'t be blank.'));
      return;
    }
    if (newCoffee.description === '') {
      dispatch(autoFlash('Description can\'t be blank.'));
      return;
    }
    if (newCoffee.photo_attributes.image && newCoffee.photo_attributes.image.size > 1100000) {
      dispatch(autoFlash('File size should be smaller than 1 Mb'));
      return;
    }
    const form = new FormData();
    form.append('coffee[name]', newCoffee.name);
    form.append('coffee[description]', newCoffee.description);
    form.append('coffee[photo_attributes][image]', newCoffee.photo_attributes.image);
    dispatch(attemptCreateCoffee(form));
  },
  handleNameChange:
  (e, newCoffee) => dispatch(changeNewCoffee({ ...newCoffee, name: e.target.value })),
  handleDescriptionChange:
  (e, newCoffee) => dispatch(changeNewCoffee({ ...newCoffee, description: e.target.value })),
  handlePhotoChange:
  (e, newCoffee) => dispatch(changeNewCoffee({ ...newCoffee, photo_attributes: { image: e.target.files[0] } })),
});

CoffeeForm.propTypes = {
  handleDescriptionChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handlePhotoChange: PropTypes.func.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  newCoffee: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoffeeForm);
