import React from "react";
import { Button, Modal } from "react-bootstrap";

type Props = {
  title: string;
  paragraph: string;
  show: boolean;
  handleClose?: any;
  handleShow?: any;
};

const CustomModal = (props: Props) => {
  const { title, paragraph, show, handleClose } = props;
  return (
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h5>
          {title}
          </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-danger fw-light text-capitalize">{paragraph}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Connect
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
