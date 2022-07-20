import React from 'react'
import {Nav, Navbar, NavLink} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Navigatebar.css'


const Navigatebar = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" className="nav-1">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="navcol">
                <Nav className="nav">
                    <NavLink className="navlink" eventKey="1" as={Link} to="/">Home</NavLink>
                    <NavLink className="navlink" eventKey="2" as={Link} to="/About">About</NavLink>
                    <NavLink className="navlink" eventKey="3" as={Link} to="/Contact">Contact</NavLink>
                    <NavLink className="navlink" eventKey="4" as={Link} to="/Projects">Projects</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigatebar