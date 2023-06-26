import { Navbar, Container, Nav } from "react-bootstrap";
import React from "react";
const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">iPhone store</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">Flash sale</Nav.Link>
            <Nav.Link href="#superhero">Best seller</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
