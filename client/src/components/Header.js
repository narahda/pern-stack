import React, {Component, useState} from 'react';
import { Container, DropdownButton, Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import owlet from "../pictures/owlet.jpg";

const Navi = () => {
    return (
            <Navbar variant = "light">
                <NavbarBrand href="/">
                    <img src = {owlet} 
                    width = "60" 
                    height = "auto" 
                    className="d-inline-block align-top"/>
                </NavbarBrand>  
                <Nav.Link href = "/register" style={{color:"black"}}>
                    create account 
                </Nav.Link>  
                <Nav.Link href = "/video" style={{color:"black"}}>
                    watch 
                </Nav.Link>
            </Navbar>

    );
};

export default Navi;