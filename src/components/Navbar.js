import React from 'react'
import { Navbar, Nav, NavDropdown, } from "react-bootstrap";
import '../index.css'

export default function NavBar() {
    return (
    <React.Fragment>
    <Navbar expand="lg" className="fixed-top my-navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
            <Nav.Link className="mynavlinks mr-4 ml-4" href="#intro">Intro</Nav.Link>
            <Nav.Link className="mynavlinks mr-5 ml-5" href="#intro">Skills</Nav.Link>
            <div className="initials mx-auto">DK</div> 
            <Nav.Link className="mynavlinks ml-5 mr-5" href="#intro">Projects</Nav.Link>
            <Nav.Link className="mynavlinks ml-5" href="#intro">Contacts</Nav.Link>
        </Nav>
        </Navbar.Collapse>

        
        
      </Navbar>
      </React.Fragment>
    )
}

