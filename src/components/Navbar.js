import React from 'react'
import { Navbar, Nav, NavDropdown, } from "react-bootstrap";
import '../index.css'

export default function NavBar() {
    return (
    <React.Fragment>

    <Navbar className="fixed-top my-navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navmargin large-nav">
            <Nav.Link className="mynavlinks" href="#intro">Intro</Nav.Link>
            <Nav.Link className="mynavlinks" href="#skills">Skills</Nav.Link>
            <div className="initials mx-auto">DK</div> 
            <Nav.Link className="mynavlinks ml-2" href="#projects">Projects</Nav.Link>
            <Nav.Link className="mynavlinks" href="#contact">Contact</Nav.Link>
        </Nav>

        {/* made mobile view a different nav item */}
        <div>
            <NavDropdown className="smallnav" title="Nav" id="basic-nav-dropdown">
                <NavDropdown.Item href="#intro">Intro</NavDropdown.Item>
                <NavDropdown.Item href="#skills">Skills</NavDropdown.Item>
                <NavDropdown.Item href="#projects" >Projects</NavDropdown.Item>
                <NavDropdown.Item  href="#contact">Contact</NavDropdown.Item>
            </NavDropdown>
            <div className="initials mobile-initials">DK</div> 
        </div>
        </Navbar.Collapse>

        
        
      </Navbar>
      </React.Fragment>
    )
}

