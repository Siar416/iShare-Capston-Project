import React from "react";
import "./MainNav.scss";
import whisperIcon from "../../assets/icons/whisperIcon.png";

import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MainNav({ setIsOpen, handleSearch, setIsOpenHowTo }) {
  return (
    <Navbar bg="drk" expand="lg">
      <Container fluid>
        <img className="whisper-icon" src={whisperIcon} alt="logo" />
        <Navbar.Brand style={{ color: "white", fontSize: "2.5rem" }}>
          iShare
        </Navbar.Brand>

        <Nav onClick={() => setIsOpen(true)} className="title">
          About Me
        </Nav>

        <Nav onClick={() => setIsOpenHowTo(true)} className="title">
          Help
        </Nav>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "6.25rem" }}
            navbarScroll
          ></Nav>

          <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="search"
              name="search"
              placeholder="Search by tag"
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
