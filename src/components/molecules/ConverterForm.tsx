import React from "react";
import { Form } from "react-bootstrap";
import { RxLoop } from "react-icons/rx";

import { useCurrencyConverter } from "../../hooks/useCurrencyConveter";

const ConverterForm: React.FC = () => {
    const {nepValue , busdValue , handleNepCurrency , handleUsdCurrency , flipConverter} = useCurrencyConverter();

  return (
    <div className="form-field">
      <Form.Group className="my-4 text-secondary">
        <Form.Label>NEP</Form.Label>
        <Form.Control
          placeholder="any valid number"
          type="number"
          value={nepValue}
          onChange={(e: any) => handleNepCurrency(e.target.value)}
        />
      </Form.Group>
      <div className="text-center">
        <button
          onClick={flipConverter}
          className="flipper text-center mx-auto bg-white border-0"
        >
          <RxLoop size={20} className="text-secondary" />
        </button>
      </div>
      <Form.Group className="my-4 text-secondary">
        <Form.Label>BUSD</Form.Label>
        <Form.Control
          type="number"
          placeholder="any valid number"
          value={busdValue}
          onChange={(e: any) => handleUsdCurrency(e.target.value)}
        />
      </Form.Group>
    </div>
  );
};

export default ConverterForm;
