import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";

const HowToModal = ({ shown }) => {
  return (
    <Modal show={shown} onHide={shown}>
      <Modal.Header closeButton>
        <Modal.Title>Help</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        A simple application where you can share any secret anonymously. Fill
        out all form fields and hit submit to share your secret. 🤫
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default HowToModal;
