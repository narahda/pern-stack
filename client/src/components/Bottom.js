import React, {Component, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavItem, NavLink } from 'react-bootstrap';
import instagram from "../pictures/instagram.png";
import linkedin from "../pictures/linkedin.png";

const Bottom = () => {
    return (
        <Container>
            <Navbar sticky ="bottom">
                <Nav>
                    <h4 className="text-center">find us!</h4>
                    <NavItem>
                        <NavLink href = "https://www.instagram.com/na.rahda/">
                            <img src = {instagram} width="20" height= "auto"/>
                        </ NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href = "https://www.linkedin.com/in/narahda-lim/">
                            <img src = {linkedin} width="20" height= "auto"/>
                        </ NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </Container>
    )
};

export default Bottom;
