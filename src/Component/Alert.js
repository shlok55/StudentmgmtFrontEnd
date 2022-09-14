import React from 'react';

import { Alert } from "react-bootstrap";

const Alert = (props) => {
  return (
      props.alert && <Alert variant={props.alert.type}>{props.alert.message}</Alert>
  )
}

export default Alert