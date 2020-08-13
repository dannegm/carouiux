import React, { useState } from 'react';

import {
  Navbar,
  Container,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from '@bootstrap-styled/v4';

const NavigationBar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Navbar light toggleable="sm">
      <Container>
        <div className="d-flex justify-content-between">
          <NavbarBrand href="/">Carolina Sánchez Guzmán</NavbarBrand>
          <NavbarToggler onClick={() => setOpen(!isOpen)} />
        </div>
        <Collapse navbar isOpen={isOpen}>
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink href="#" className="mt-2 mb-2 ml-4 mr-4">
                Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="mt-2 mb-2 ml-4 mr-4">
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="mt-2 mb-2 ml-4 mr-4">
                About
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
