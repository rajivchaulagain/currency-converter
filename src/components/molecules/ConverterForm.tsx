import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { RxLoop } from "react-icons/rx";

const ConverterForm: React.FC = () => {
  const [nepValue, setNepValue] = useState<number>(1);
  const [busdValue, setBusdValue] = useState<number>(3);

  let exchangeRate: number = 3;

  const handleNepCurrency = (value: number) => {
    // let fixedValue = parseFloat(Number(value).toFixed(2))
    setNepValue(value);
    setBusdValue(value * exchangeRate);
  };

  const handleUsdCurrency = (value: number) => {
    // let fixedValue = parseFloat(Number(value).toFixed(2))
    setBusdValue(value);
    setNepValue(value / exchangeRate);
  };

  const flipConverter = () => {
    setBusdValue(nepValue);
    setNepValue(nepValue / exchangeRate)
  };

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
