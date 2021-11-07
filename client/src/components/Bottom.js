import React, {Component, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavItem, NavLink } from 'react-bootstrap';
import instagram from "../pictures/instagram.png";
import linkedin from "../pictures/linkedin.png";
import paper from "../pictures/paper.png";
import github from "../pictures/github.png";

const Bottom = () => {
    return (
        <Container>
            <Navbar className="justify-content-center" sticky ="bottom">
                <Nav>
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
                    <NavItem>
                        <NavLink href = "https://docs.google.com/document/d/10NU-6H_-JYnQcDjeMxm4c1dopczS7vSlc6CXWfKbcq4/edit?usp=sharing">
                            <img src = {paper} width="20" height= "auto"/>
                        </ NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href = "https://github.com/narahda?tab=repositories">
                            <img src = {github} width="20" height= "auto"/>
                        </ NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </Container>
    )
};

export default Bottom;
