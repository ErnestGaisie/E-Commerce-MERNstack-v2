import React from "react";
import "./Loader.css";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner className="spinner" animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loader;
