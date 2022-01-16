import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewSodaForm(props){
  function handleNewSodaFormSubmission(event){
    event.preventDefault();
    props.onNewSodaCreation({name: event.target.name.value, flavor: event.target.flavor.value, price: event.target.price.value, cans: event.target.cans.value, id: v4()});
  }
  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewSodaFormSubmission}
      buttonText = "Add!" />
    </React.Fragment>
  );
}

NewSodaForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};
export default NewSodaForm;