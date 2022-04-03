import "./AboutModal.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import aboutIcon from "../../assets/icons/aboutIcon.png";
import githubIcon from "../../assets/icons/github.svg";

import linkedInIcon from "../../assets/icons/linkedin.png";

const AboutModal = ({ isOpen }) => {
  return (
    <Modal show={isOpen} onHide={isOpen}>
      <Modal.Header closeButton>
        <img src={aboutIcon} alt="user icon" />
        <Modal.Title>Hello World...I'm Siar!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        An aspiring Web Developer, who enjoys learning new skills and
        technologies. I've always been intersted in tech. and how it can be used
        to solve problems and make a difference. I hope you enjoy my site and
        would like to connect with me.
      </Modal.Body>
      <Modal.Footer>
        <a href="https://www.linkedin.com/in/siarwahidi/">
          <img src={linkedInIcon} alt="linked in" />
        </a>
        <a href="https://github.com/Siar416">
          <img src={githubIcon} alt="github" />
        </a>
      </Modal.Footer>
    </Modal>
  );
};

export default AboutModal;
