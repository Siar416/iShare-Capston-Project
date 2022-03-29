import React from "react";
import "./MainNav.scss";
import whisperIcon from "../../assets/icons/whisperIcon.png";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MainNav({ setIsOpen }) {
  return (
    <Navbar bg="drk" expand="lg">
      <Container fluid>
        <img className="whisper-icon" src={whisperIcon} />
        <Navbar.Brand className="title" style={{ color: "white" }}>
          iShare
        </Navbar.Brand>
        <Nav.Link
          onClick={() => setIsOpen(true)}
          className="title"
          style={{ color: "white" }}
        >
          About Me
        </Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light" size="sm">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;
