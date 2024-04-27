import React from 'react'
import { Nav, Navbar, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Navigatebar.css'

import Home_Icon from '../../assets/icons/Home-Icon.png'
import About_Icon from '../../assets/icons/About-Icon.png'
import Projects_Icon from '../../assets/icons/Project-Icon.png'

const Navigatebar = () => {
    return (
        <Navbar collapseOnSelect expand="sm" className="nav-1">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="navcol justify-content-center">
                <Nav className="nav">
                    <NavLink className="navlink" eventKey="1" as={Link} to="/">
                        <img src={Home_Icon} alt="" />   Home
                    </NavLink>
                    <NavLink className="navlink" eventKey="2" as={Link} to="/About">
                        <img src={About_Icon} alt="" />   About
                    </NavLink>
                    <NavLink className="navlink" eventKey="4" as={Link} to="/Projects">
                        <img src={Projects_Icon} alt="" />   Projects
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigatebar