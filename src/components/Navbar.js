import React from 'react'
import { Navbar, Nav, NavDropdown, } from "react-bootstrap";
import '../index.css'

export default function NavBar() {
    return (
    <Navbar expand="lg" className="fixed-top my-navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link className="mynavlinks" href="#intro">Intro</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand className="float-right myname navbar-brand">Dennis Krupitsky</Navbar.Brand>
      </Navbar>
    )
}

