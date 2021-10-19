import React, {Component, useState} from 'react';
import {Navbar, NavbarBrand, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPlayer from './VideoPlayer';

const Navi = () => {
    return (
        <div className = "Container">
            <Navbar color = "light" variant = "danger">
                <NavbarBrand href = "/" src = "."> mango! </NavbarBrand>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                      stuff idk?
                  </DropdownToggle>
                  <DropdownMenu>
                      <DropdownItem href = "http://localhost:3000/video">
                          video menu
                      </DropdownItem>
                      <DropdownItem href = "http://localhost:3000/accounts/create">
                          create user
                      </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
            </Navbar>
        </div>

    );
};

export default Navi;