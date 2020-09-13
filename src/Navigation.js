import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

class Navigation extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Seolynn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <NavDropdown title="Travel Preparation" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Learn Korean</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Learn Japanese</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Work and Study Opportunities</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Living in Korea</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Local Culture" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">DFW Korean Spots</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">DFW Japanese Spots</NavDropdown.Item>
              <NavDropdown.Divider />

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;