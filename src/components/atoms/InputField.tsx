import React from "react";
import { Form } from "react-bootstrap";

const InputField: React.FC = () => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Disabled input</Form.Label>
      <Form.Control placeholder="Disabled input" disabled />
    </Form.Group>
  );
};

export default InputField;
