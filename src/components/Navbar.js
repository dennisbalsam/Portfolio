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
            <Nav.Link className="mynavlinks" href="#intro">Intro</Nav.Link>
            <Nav.Link className="mynavlinks" href="#intro">Intro</Nav.Link>
            <div className="initials mx-auto">DK</div> 
            <Nav.Link className="mynavlinks" href="#intro">Hello</Nav.Link>
            <Nav.Link className="mynavlinks" href="#intro">Hello</Nav.Link>
        </Nav>
        </Navbar.Collapse>

        {/* <Navbar.Brand className="float-right myname navbar-brand">Dennis Krupitsky</Navbar.Brand> */}
        
        
      </Navbar>
      </React.Fragment>
    )
}

