import React, { useState } from "react";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";

import NavDropdown from "react-bootstrap/NavDropdown";

function Header(props) {
  //get the tone selected

  const dark = "#333333";
  const yellow = "#f5ba13";

  function toneHandler(event) {
    const { name } = event.target;
    props.getColor(name);
  }
  return (
    <header 
    style={{backgroundColor:props.styleColor}} 
    >
      <Navbar expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">
            <h1>
              <LightbulbIcon />
              Keeper
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <h1>
                  <LightbulbIcon />
                  Keeper
                </h1>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Navbar.Text>Styles</Navbar.Text>
                <NavDropdown.Divider />
                <Nav.Link name={yellow} onClick={toneHandler}>
                  Yellow
                </Nav.Link>
                <Nav.Link name={dark} onClick={toneHandler}>
                  Dark
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
