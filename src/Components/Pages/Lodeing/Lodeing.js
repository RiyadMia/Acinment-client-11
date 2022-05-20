import React from "react";
import { Spinner } from "react-bootstrap";
import "./Lodeing.css";
const Lodeing = () => {
  return (
    <div>
      <div style={{ hight: "300px" }} className="w-100 d-flex lodeing-center">
        <Spinner animation="border" variant="primary" />
      </div>
    </div>
  );
};

export default Lodeing;
