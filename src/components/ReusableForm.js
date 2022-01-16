import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit = {props.formSubmissionHandler}>
        <input
        type = 'text'
        name = 'name'
        placeholder = 'Name' />
        <input
        type = 'text'
        name = 'flavor'
        placeholder = 'Flavor' />
        <input 
        type = 'text'
        name = 'price'
        placeholder = 'Price' />
        <input 
        type = 'text'
        name = 'cans'
        placeholder = 'How many Cans' />
        <button type = 'submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;