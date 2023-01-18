import React, { useState } from "react";
import { Card } from "react-bootstrap";

import ConverterForm from "./ConverterForm";
import CustomModal from "./CustomModal";

type Props = {
  title: string;
  className?: string;
};

const ConverterCard = (props: Props) => {
  const [show, setShow] = useState(false);
  const { title, className } = props;

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Card className={`${className}`}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <ConverterForm />
        </Card.Body>
        <Card.Text
         className="text-primary text-center">
          {/* eslint-disable-next-line */}
          <a href="#" onClick={handleShow}>  
          Check wallet details
          </a>
        </Card.Text>
      </Card>
      <CustomModal
        title="Wallet details"
        paragraph="wallet not connected. Please click the Connect Now button below"
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
      />
    </>
  );
};

export default ConverterCard;
