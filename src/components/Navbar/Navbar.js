import React from 'react';
import { Link } from 'react-router-dom';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';

function Navbar() {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="navbar">
      <BootstrapNavbar.Brand as={Link} to="/">Netflix clone</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/favlist">Favorite List</Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

export default Navbar;

