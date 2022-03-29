import "./AboutModal.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import aboutIcon from "../../assets/icons/aboutIcon.png";

import linkedInIcon from "../../assets/icons/linkedin.png";

import { useState } from "react";

const AboutModal = ({ isOpen }) => {
  const [name, setName] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Modal show={() => isOpen(false)} onHide={() => isOpen(false)}>
      <Modal.Header closeButton>
        <img src={aboutIcon} alt="user icon" />
        <Modal.Title>Hello World...I'm Siar!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          An aspiring Web Developer, who enjoys learning new skills and
          technologies. I've always been intersted in tech. and how it can be
          used to solve problems and make a difference. I hope you enjoy my site
          and would like to connect with me.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <a href="https://www.linkedin.com/in/siarwahidi/">
          <img src={linkedInIcon} />
        </a>
      </Modal.Footer>
    </Modal>
  );
};

export default AboutModal;
