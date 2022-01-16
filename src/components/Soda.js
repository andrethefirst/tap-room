import React from "react";
import PropTypes from 'prop-types';

function Soda(props){
  return (
    <>
      <div className="soda" onClick = {() => props.whenSodaClicked(props.id)}>
        <h2><b>Name:</b> {props.name}</h2>
        <h3><b>Flavor:</b> {props.flavor}</h3>
        <h3><b>Price:</b> {props.price}</h3>
        <h3><b>Cans Left:</b> {props.cans}</h3>
        <hr />
      </div>
      </>
  )
}

Soda.propTypes = {
  whenSodaClicked: PropTypes.func,
  name: PropTypes.string.isRequired,
  flavor: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  cans: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default Soda;