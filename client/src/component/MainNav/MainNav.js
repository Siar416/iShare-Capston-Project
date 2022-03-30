import React from "react";
import "./MainNav.scss";
import whisperIcon from "../../assets/icons/whisperIcon.png";
import aboutIcon from "../../assets/icons/aboutIcon.png";
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
import axios from "axios";

function MainNav({ setIsOpen, handleSearch }) {
  // moved handleSearch to App.js

  return (
    <Navbar bg="drk" expand="lg">
      <Container fluid>
        <img className="whisper-icon" src={whisperIcon} />
        <Navbar.Brand className="title" style={{ color: "white" }}>
          iShare
        </Navbar.Brand>

        <Nav
          onClick={() => setIsOpen(true)}
          className="title"
          style={{ color: "white" }}
        >
          About Me
        </Nav>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>

          <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="search"
              name="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button type="submit" variant="outline-light" size="sm">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;
