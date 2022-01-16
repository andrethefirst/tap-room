import React from "react";
import sodaImage from "./../img/soda.png";

function Header(){
  return (
    <React.Fragment>
      <h1>Soda Bar</h1>
      <img src={sodaImage} alt="An image of soda cans" />
    </React.Fragment>
  );
}

export default Header;