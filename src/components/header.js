import React, { Fragment } from 'react';

function Header(props) {
  return (
      <Fragment>
    <h1>{props.info}</h1>
    <h2>my number is {props.number}</h2>
    </Fragment>
  );
}

export default Header;
