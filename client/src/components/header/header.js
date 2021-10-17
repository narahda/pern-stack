import React, {Component, useState} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navi = (props) => {
    return (
        <div className = "header">
            <Navbar color = "dark" variant = "dark">
                <NavbarBrand href = "." src = "."> Me! </NavbarBrand>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                      my life
                  </DropdownToggle>
                  <DropdownMenu>
                      <DropdownItem href = ".">
                          work experiences
                      </DropdownItem>
                      <DropdownItem>
                          schooling
                      </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
            </Navbar>
        </div>

    );
};

export default Navi;