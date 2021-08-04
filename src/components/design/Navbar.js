
import React from 'react';
import { Navbar,Nav,NavDropdown,Container } from 'react-bootstrap'
  
const Navbar1 = () => {
    const mystyle = {  
        color: "Green",  
        backgroundColor: "lightBlue",  
        padding: "10px",  
        fontFamily: "Arial"  
      };  
  return(
    <Navbar style={mystyle} expand="lg"  fixed="top">
    <Container>
      <Navbar.Brand href="#home">Global-Reach</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">donations</Nav.Link>
          <NavDropdown title="pages" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Page1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Page2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Page3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
};
  
export default Navbar1;