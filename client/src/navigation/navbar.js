import React, {Component, useState} from 'react';
import {Collapse,Container, Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,
  DropdownMenu,DropdownItem,NavbarText} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navi = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
          <Navbar color="dark" >
            <Container>
              <NavbarBrand href = "."> welcome to the internet</NavbarBrand>
              <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                      other things
                  </DropdownToggle>
                  <DropdownMenu>
                      <DropdownItem href = ".">
                          voldetort
                      </DropdownItem>
                      <DropdownItem>
                          orange
                      </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
            </Container>
          </Navbar>
        
      );
}

export default Navi;