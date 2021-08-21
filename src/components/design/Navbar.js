import React from "react";

import ReactBootstrap, { Nav, Navbar, Container } from "react-bootstrap";

const NAVbar = () => {
  return (
    <div>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="#home">GLOBAL REACH</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Campaign">Campaign</Nav.Link>
            <Nav.Link href="/Administrator">Admin Panel</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NAVbar;
