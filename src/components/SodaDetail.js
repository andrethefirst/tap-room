import React from 'react';
import PropTypes from "prop-types";

function SodaDetail(props) {
  const { soda, onClickingDelete, onClickingDecrease, onClickingIncrease } = props;
  return (
    <React.Fragment>
      <h1>Soda Detail</h1>
      <h3>{soda.flavor} - {soda.name} - {soda.price}</h3>
      <p><em>{soda.cans}</em></p>
      <button onClick={ props.onClickingEdit}>Update Soda</button>
      <button onClick={ () => onClickingDelete(soda.id)}>Retire Soda</button>
      <button onClick={() => onClickingDecrease(soda.id)}>Decrease Soda</button>
      <button onClick={() => onClickingIncrease(soda.id)}>Increase Soda</button>
      <hr />
    </React.Fragment>
  );
}

SodaDetail.propTypes = {
  soda: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingIncrease: PropTypes.func,
  onClickingDecrease: PropTypes.func
};

export default SodaDetail;