import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';

function EditSodaForm (props) {
  const { soda } = props;

  function handleEditSodaFormSubmission(e) {
    e.preventDefault();
    props.onEditSoda({
      name: e.target.name.value,
      flavor: e.target.flavor.value,
      price: e.target.price.value,
      cans: e.target.cans.value
    })
  }

  return (
    <>
      <ReusableForm
      formSubmissionHandler = {handleEditSodaFormSubmission}
      soda = {soda}
      buttonText = "Update Soda"
      />
    </>
  )
}

EditSodaForm.propTypes = {
  soda: PropTypes.object,
  onEditSoda: PropTypes.func
};

export default EditSodaForm;