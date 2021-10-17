import React, {Component, useState} from 'react';
import {Navbar, NavbarBrand, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navi = () => {
    return (
        <div className = "Container">
            <Navbar color = "light" variant = "danger">
                <NavbarBrand href = "." src = "."> Me! </NavbarBrand>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                      stuff idk?
                  </DropdownToggle>
                  <DropdownMenu>
                      <DropdownItem href = "http://localhost:8080/accounts">
                          video menu
                      </DropdownItem>
                      <DropdownItem>
                          update info
                      </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
            </Navbar>
        </div>

    );
};

export default Navi;