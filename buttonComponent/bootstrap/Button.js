import React from "react";
import { Button } from "react-bootstrap";

function Button(props) {
  return (
    <>
      <Button variant="primary">{props.name}</Button>
    </>
  );
}

export default Button;
